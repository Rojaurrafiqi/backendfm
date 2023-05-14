import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// register pasien method post
export const pendaftaran_ranap = async (req, res) => {
  const {
    id_pasien_rm,
    tanggal_masuk,
    dokter,
    perawat,
    no_kamar,
    pembayaran_ranap,
  } = req.body;

  try {
    const dataPasien = await prisma.pasien_ranap.create({
      data: {
        id_pasien_rm: id_pasien_rm,
        tanggal_masuk: tanggal_masuk,
        dokter: dokter,
        perawat: perawat,
        no_kamar: no_kamar,
        pembayaran_ranap: pembayaran_ranap,
      },
    });
    res.status(201).json(dataPasien);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// show all pasien ranap method get
export const getAllPasienRanap = async (req, res) => {
  const { search, page, limit } = req.query;
  const searchQuery = search
    ? {
        OR: [
          { dokter: { contains: search } },
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
    const totalItems = await prisma.pasien_ranap.count({ where: searchQuery });
    const totalPages = Math.ceil(totalItems / limitNumber);

    const getData = await prisma.pasien_ranap.findMany({
      where: searchQuery,
      select: {
        id: true,
        tanggal_masuk: true,
        dokter: true,
        perawat: true,
        no_kamar: true,
        pasien_rm: {
          select: {
            id: true,
            no_rm: true,
            nama_lengkap: true,
            kelamin: true,
          },
        },
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

//get pasien ranap by id
export const getPasienRanapById = async (req, res) => {
  try {
    const data = await prisma.pasien_ranap.findUnique({
      where: {
        id: Number(req.params.id),
      },
      select: {
        id: true,
        tanggal_masuk: true,
        no_kamar: true,
        dokter: true,
        perawat: true,
        pasien_rm: {
          select: {
            id: true,
            nama_lengkap: true,
            kelamin: true,
            agama: true,
            no_rm: true,
            alamat_pasien_provinsi: true,
            alamat_pasien_detail: true,
            kontak_pasien: true,
          },
        },
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

// delete pasien ranap method delete
export const deletePasienRanap = async (req, res) => {
  try {
    const data = await prisma.pasien_ranap.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// edit pasien ranap method update
