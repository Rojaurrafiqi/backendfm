import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// get data
export const getStokObat = async (req, res) => {
  const { search, page, limit, date } = req.query;
  const searchQuery = search
    ? {
        OR: [
          { obat: { nama_obat: { contains: search } } },
          { status_stok: { contains: search } },
        ],
      }
    : {};
  const pageNumber = parseInt(page) || 1;
  const limitNumber = parseInt(limit) || 10;
  const skipNumber = (pageNumber - 1) * limitNumber;
  try {
    const totalItems = await prisma.stok_obat.count({
      where: searchQuery,
    });
    const totalPages = Math.ceil(totalItems / limitNumber);

    const getData = await prisma.stok_obat.findMany({
      where: searchQuery,
      select: {
        id: true,
        obat: {
          select: {
            id: true,
            nama_obat: true,
          },
        },
        jumlah_stok: true,
        tanggal_kadaluarsa: true,
        tanggal_penerimaan: true,
        lokasi_penyimpanan: true,
        batas_minimum_stok: true,
        status_stok: true,
        catatan: true,
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
export const postStokObat = async (req, res) => {
  const {
    id_obat,
    jumlah_stok,
    tanggal_kadaluarsa,
    tanggal_penerimaan,
    lokasi_penyimpanan,
    batas_minimum_stok,
    status_stok,
    catatan,
  } = req.body;
  try {
    const postData = await prisma.stok_obat.create({
      data: {
        id_obat: id_obat,
        jumlah_stok: jumlah_stok,
        tanggal_kadaluarsa: tanggal_kadaluarsa,
        tanggal_penerimaan: tanggal_penerimaan,
        lokasi_penyimpanan: lokasi_penyimpanan,
        batas_minimum_stok: batas_minimum_stok,
        status_stok: status_stok,
        catatan: catatan,
      },
    });
    res.status(201).json(postData);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
// edit data
export const updateStokObat = async (req, res) => {
  const {
    id_obat,
    jumlah_stok,
    tanggal_kadaluarsa,
    tanggal_penerimaan,
    lokasi_penyimpanan,
    batas_minimum_stok,
    status_stok,
    catatan,
  } = req.body;
  try {
    const updateData = await prisma.stok_obat.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        id_obat: id_obat,
        jumlah_stok: jumlah_stok,
        tanggal_kadaluarsa: tanggal_kadaluarsa,
        tanggal_penerimaan: tanggal_penerimaan,
        lokasi_penyimpanan: lokasi_penyimpanan,
        batas_minimum_stok: batas_minimum_stok,
        status_stok: status_stok,
        catatan: catatan,
      },
    });
    res.status(200).json(updateData);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// delete data
export const deleteStokObat = async (req, res) => {
  try {
    const deleteData = await prisma.stok_obat.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(204).json(deleteData);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
