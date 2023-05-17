import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// get data
export const getResepUmum = async (req, res) => {
  const { search, page, limit, date } = req.query;
  const searchQuery = search
    ? {
        OR: [
          { obat: { nama_obat: { contains: search } } },
          { nama_pasien: { contains: search } },
          { nama_dokter: { contains: search } },
          { status_resep: { contains: search } },
        ],
      }
    : {};
  const pageNumber = parseInt(page) || 1;
  const limitNumber = parseInt(limit) || 10;
  const skipNumber = (pageNumber - 1) * limitNumber;
  try {
    const totalItems = await prisma.resep_umum.count({
      where: searchQuery,
    });
    const totalPages = Math.ceil(totalItems / limitNumber);

    const getData = await prisma.resep_umum.findMany({
      where: searchQuery,
      select: {
        id: true,
        obat: {
          select: {
            id: true,
            nama_obat: true,
          },
        },
        nama_pasien: true,
        nama_dokter: true,
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
export const postResepUmum = async (req, res) => {
  const {
    id_obat,
    nama_pasien,
    nama_dokter,
    tanggal_resep,
    dosis,
    frekuensi,
    instruksi_penggunaan,
    durasi_obat,
    jumlah,
    status_resep,
  } = req.body;
  try {
    const postData = await prisma.resep_umum.create({
      data: {
        id_obat: id_obat,
        nama_pasien: nama_pasien,
        nama_dokter: nama_dokter,
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
export const updateResepUmum = async (req, res) => {
  const {
    id_obat,
    nama_pasien,
    nama_dokter,
    tanggal_resep,
    dosis,
    frekuensi,
    instruksi_penggunaan,
    durasi_obat,
    jumlah,
    status_resep,
  } = req.body;
  try {
    const updateData = await prisma.resep_umum.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        id_obat: id_obat,
        nama_pasien: nama_pasien,
        nama_dokter: nama_dokter,
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
export const deleteResepUmum = async (req, res) => {
  try {
    const deleteData = await prisma.resep_umum.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(204).json(deleteData);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
