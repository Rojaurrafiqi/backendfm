import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// register pasien method post
export const pendaftaran_ralan = async (req, res) => {
  const {
    id_pasien_rm,
    poliklinik,
    id_pembayaran,
    asuransi,
    no_asuransi,
    dokter,
    jenis_konsultasi,
    no_antrian,
    biaya_adm,
    biaya_share_dokter,
    isBB,
  } = req.body;

  try {
    const currentDate = new Date();
    const lastTwoDigitsOfYear = currentDate.getFullYear() % 100;
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    const createNoReg =
      lastTwoDigitsOfYear.toString() +
      month.toString().padStart(2, "0") +
      day.toString().padStart(2, "0") +
      hours.toString().padStart(2, "0") +
      minutes.toString().padStart(2, "0") +
      id_pasien_rm.toString();
    const dataPasien = await prisma.pasien_ralan.create({
      data: {
        id_pasien_rm: id_pasien_rm,
        no_registrasi: createNoReg.toString(),
        poliklinik: poliklinik,
        dokter: dokter,
        asuransi: asuransi,
        no_asuransi: no_asuransi,
        biaya_adm: biaya_adm,
        biaya_share_dokter: biaya_share_dokter,
        id_pembayaran: id_pembayaran,
        jenis_konsultasi: jenis_konsultasi,
        no_antrian: no_antrian,
        isBB: isBB,
      },
    });
    res.status(201).json(dataPasien);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// show all pasien ralan method get
export const getAllPasienRalan = async (req, res) => {
  const { search, page, limit } = req.query;
  const searchQuery = search
    ? {
        OR: [
          // { dokter: { nama_dokter: { contains: search } } },
          { pasien_rm: { nama_user: { contains: search } } },
        ],
      }
    : {};

  const pageNumber = parseInt(page) || 1;
  const limitNumber = parseInt(limit) || 10;
  const skipNumber = (pageNumber - 1) * limitNumber;

  try {
    const countQuery = await prisma.pasien_ralan.count({
      where: {
        ...searchQuery,
        isCheckout_Poli: 0,
      },
    });

    const totalItems = countQuery;
    const totalPages = Math.ceil(totalItems / limitNumber);

    const getData = await prisma.pasien_ralan.findMany({
      where: {
        ...searchQuery,
        isCheckout_Poli: 0,
      },
      select: {
        id: true,
        pasien_rm: {
          select: {
            id: true,
            no_mr: true,
            nama_user: true,
            gender_data: {
              select: {
                id_gender: true,
                jenis_kelamin: true,
              },
            },
          },
        },
        poliklinik_data: {
          select: {
            id_ruangan: true,
            nama_ruangan: true,
          },
        },
        dokter_data: {
          select: {
            id: true,
            gelar_dpn: true,
            nama_user: true,
            gelar_blk: true,
          },
        },
        jenis_konsultasi: true,
        no_antrian: true,
        asuransi_data: {
          select: {
            id_asuransi: true,
            singkatan: true,
          },
        },
        no_asuransi: true,
        biaya_adm: true,
        biaya_share_dokter: true,
        isBB: true,
      },
      skip: skipNumber,
      take: limitNumber,
    });

    // deposit = biaya adm + biaya share ke dokter
    const dataWithDeposit = getData.map((item) => ({
      ...item,
      deposit: Number(item.biaya_adm) + Number(item.biaya_share_dokter),
    }));

    res.status(200).json({
      data: dataWithDeposit,
      totalItems,
      totalPages,
      currentPage: pageNumber,
    });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

//get pasien ralan by id
export const getPasienRalanById = async (req, res) => {
  try {
    const getData = await prisma.pasien_ralan.findUnique({
      where: {
        id: Number(req.params.id),
      },
      select: {
        id: true,
        pasien_rm: {
          select: {
            id: true,
            no_mr: true,
            nama_user: true,
            gender_data: {
              select: {
                id_gender: true,
                jenis_kelamin: true,
              },
            },
            id_agama: true,
            no_hp: true,
            alamat: true,
            id_prov: true,
            id_kabkota: true,
          },
        },
        poliklinik_data: {
          select: {
            id_ruangan: true,
            nama_ruangan: true,
          },
        },
        no_registrasi: true,
        dokter_data: {
          select: {
            id: true,
            gelar_dpn: true,
            nama_user: true,
            gelar_blk: true,
          },
        },
        jenis_konsultasi: true,
        no_antrian: true,
        asuransi_data: {
          select: {
            id_asuransi: true,
            singkatan: true,
          },
        },
        no_asuransi: true,
        biaya_adm: true,
        biaya_share_dokter: true,
      },
    });
    // deposit = biaya adm + biaya share ke dokter
    const dataWithDeposit = {
      ...getData,
      deposit: Number(getData.biaya_adm) + Number(getData.biaya_share_dokter),
    };
    res.status(200).json({ data: dataWithDeposit });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

// delete pasien ranap method delete
export const deletePasienRalan = async (req, res) => {
  try {
    const data = await prisma.pasien_ralan.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//update status pasien ralan checkout poli
export const statusCheckoutPoli = async (req, res) => {
  try {
    //mengambil no registrasi sesuai id pasien
    const pasienRalan = await prisma.pasien_ralan.findUnique({
      where: {
        id: Number(req.params.id),
      },
      select: {
        no_registrasi: true,
      },
    });

    // cek apakah no_registrasi pasien terdapat di table jual barang
    const jualBarang = await prisma.jual_barang.findFirst({
      where: {
        no_registrasi: pasienRalan.no_registrasi,
      },
    });

    let updateData;

    if (jualBarang) {
      updateData = await prisma.pasien_ralan.update({
        where: {
          id: Number(req.params.id),
        },
        data: {
          isCheckout_Poli: 1,
          isResep: "1",
        },
      });
    } else {
      updateData = await prisma.pasien_ralan.update({
        where: {
          id: Number(req.params.id),
        },
        data: {
          isCheckout_Poli: 1,
        },
      });
    }

    res.status(200).json(updateData);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
