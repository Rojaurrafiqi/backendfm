import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// get data
export const getResepObat = async (req, res) => {
  const { search, page, limit, date } = req.query;
  const searchQuery = search
    ? {
        OR: [
          { obat: { nama_obat: { contains: search } } },
          { pasien_rm: { nama_lengkap: { contains: search } } },
          { dokter: { nama_dokter: { contains: search } } },
          { tanggal_resep: { contains: search } },
          { status_resep: { contains: search } },
        ],
      }
    : {};
  const pageNumber = parseInt(page) || 1;
  const limitNumber = parseInt(limit) || 10;
  const skipNumber = (pageNumber - 1) * limitNumber;
  try {
    const totalItems = await prisma.resep.count({
      where: searchQuery,
    });
    const totalPages = Math.ceil(totalItems / limitNumber);

    const getData = await prisma.resep.findMany({
      where: searchQuery,
      select: {
        id: true,
        obat: {
          select: {
            id: true,
            nama_obat: true,
          },
        },
        pasien_rm: {
          select: {
            id: true,
            nama_lengkap: true,
          },
        },
        dokter: {
          select: {
            nama_dokter: true,
          },
        },
        tanggal_resep: true,
        dosis: true,
        frekuensi: true,
        instruksi_penggunaan: true,
        durasi_obat: true,
        jumlah: true,
        status_resep: true,
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

// post data
export const postResepObat = async (req, res) => {
  const {
    id_obat,
    id_pasien_rm,
    id_dokter,
    tanggal_resep,
    dosis,
    frekuensi,
    instruksi_penggunaan,
    durasi_obat,
    jumlah,
    status_resep,
  } = req.body;
  try {
    const postData = await prisma.resep.create({
      data: {
        id_obat: id_obat,
        id_pasien_rm: id_pasien_rm,
        id_dokter: id_dokter,
        tanggal_resep: tanggal_resep,
        dosis: dosis,
        frekuensi: frekuensi,
        instruksi_penggunaan: instruksi_penggunaan,
        durasi_obat: durasi_obat,
        jumlah: jumlah,
        status_resep: status_resep,
      },
    });
    res.status(201).json(postData);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
// edit data
export const updateResepObat = async (req, res) => {
  const {
    id_obat,
    id_pasien_rm,
    id_dokter,
    tanggal_resep,
    dosis,
    frekuensi,
    instruksi_penggunaan,
    durasi_obat,
    jumlah,
    status_resep,
  } = req.body;
  try {
    const updateData = await prisma.resep.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        id_obat: id_obat,
        id_pasien_rm: id_pasien_rm,
        id_dokter: id_dokter,
        tanggal_resep: tanggal_resep,
        dosis: dosis,
        frekuensi: frekuensi,
        instruksi_penggunaan: instruksi_penggunaan,
        durasi_obat: durasi_obat,
        jumlah: jumlah,
        status_resep: status_resep,
      },
    });
    res.status(200).json(updateData);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// delete data
export const deleteResepObat = async (req, res) => {
  try {
    const deleteData = await prisma.resep.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(204).json(deleteData);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
