import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// register pasien method post
export const pendaftaran_ralan = async (req, res) => {
  const {
    id_pasien_rm,
    poliklinik,
    id_pembayaran,
    deposit,
    dokter,
    jenis_pasien,
    jenis_konsultasi,
    no_antrian,
  } = req.body;

  try {
    const dataPasien = await prisma.pasien_ralan.create({
      data: {
        id_pasien_rm: id_pasien_rm,
        poliklinik: poliklinik,
        dokter: dokter,
        deposit: deposit,
        id_pembayaran: id_pembayaran,
        jenis_pasien: jenis_pasien,
        jenis_konsultasi: jenis_konsultasi,
        no_antrian: no_antrian,
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
          { dokter_data: { nama_dokter: { contains: search } } },
          { pasien_rm: { name_user: { contains: search } } },
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
            id_jk: true,
          },
        },
        poliklinik: true,
        dokter: true,
        jenis_pasien: true,
        jenis_konsultasi: true,
        no_antrian: true,
        deposit: true,
      },
      skip: skipNumber,
      take: limitNumber,
    });

    res.status(200).json({
      data: getData,
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
    const data = await prisma.pasien_ralan.findUnique({
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
            id_jk: true,
            id_agama: true,
            no_hp: true,
            alamat: true,
            id_prov: true,
            id_kabkota: true,
          },
        },
        poliklinik: true,
        no_registrasi: true,
        dokter: true,
        jenis_pasien: true,
        jenis_konsultasi: true,
        no_antrian: true,
        deposit: true,
      },
    });
    res.status(200).json(data);
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
