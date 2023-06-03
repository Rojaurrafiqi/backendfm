import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// register pasien method post
export const pendaftaran_ralan = async (req, res) => {
  const {
    id_pasien_rm,
    id_poli,
    id_jadwal_poliklinik,
    id_pembayaran,
    deposit,
    id_dokter,
    jenis_pasien,
    jenis_konsultasi,
    no_antrian,
  } = req.body;

  try {
    const dataPasien = await prisma.pasien_ralan.create({
      data: {
        id_pasien_rm: id_pasien_rm,
        id_poli: id_poli,
        id_jadwal_poliklinik: id_jadwal_poliklinik,
        deposit: deposit,
        id_pembayaran: id_pembayaran,
        id_dokter: id_dokter,
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
          { dokter: { nama_dokter: { contains: search } } },
          { pasien_rm: { nama_lengkap: { contains: search } } },
          // pencarian dngn no rm masih belum jalan
          // { pasien_rm: { no_rm: { contains: parseInt(search) } } },
        ],
      }
    : {};
  const pageNumber = parseInt(page) || 1;
  const limitNumber = parseInt(limit) || 10;
  const skipNumber = (pageNumber - 1) * limitNumber;

  try {
    const totalItems = await prisma.pasien_ralan.count({ where: searchQuery });
    const totalPages = Math.ceil(totalItems / limitNumber);

    const getData = await prisma.pasien_ralan.findMany({
      where: searchQuery,
      select: {
        id: true,
        pasien_rm: {
          select: {
            id: true,
            no_rm: true,
            nama_lengkap: true,
            kelamin: true,
          },
        },
        poliklinik_ralan: {
          select: {
            id: true,
            nama_poliklinik: true,
          },
        },
        dokter_data: {
          select: {
            id: true,
            nama_dokter: true,
          },
        },
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
            no_rm: true,
            nama_lengkap: true,
            kelamin: true,
            agama: true,
            kontak_pasien: true,
            alamat_pasien_provinsi: true,
            alamat_pasien_detail: true,
          },
        },
        poliklinik_ralan: {
          select: {
            id: true,
            nama_poliklinik: true,
          },
        },
        jadwal_poliklinik: {
          select: {
            id: true,
            jam: true,
          },
        },
        dokter_data: {
          select: {
            id: true,
            nama_dokter: true,
          },
        },
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
