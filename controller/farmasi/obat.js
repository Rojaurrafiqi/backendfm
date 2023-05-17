import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// get data
export const getDataObat = async (req, res) => {
  const { search, page, limit, date } = req.query;
  const searchQuery = search
    ? {
        OR: [{ nama_obat: { contains: search } }],
      }
    : {};
  const pageNumber = parseInt(page) || 1;
  const limitNumber = parseInt(limit) || 10;
  const skipNumber = (pageNumber - 1) * limitNumber;
  try {
    const totalItems = await prisma.obat.count({
      where: searchQuery,
    });
    const totalPages = Math.ceil(totalItems / limitNumber);

    const getData = await prisma.obat.findMany({
      where: searchQuery,
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
export const postDataObat = async (req, res) => {
  const {
    nama_obat,
    kategori_obat,
    deskripsi_obat,
    dosis_obat,
    efek_samping,
    peringatan,
    instruksi_penggunaan,
  } = req.body;
  try {
    const postData = await prisma.obat.create({
      data: {
        nama_obat: nama_obat,
        kategori_obat: kategori_obat,
        deskripsi_obat: deskripsi_obat,
        dosis_obat: dosis_obat,
        efek_samping: efek_samping,
        peringatan: peringatan,
        instruksi_penggunaan: instruksi_penggunaan,
      },
    });
    res.status(201).json(postData);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
// edit data
export const updateDataObat = async (req, res) => {
  const {
    nama_obat,
    kategori_obat,
    deskripsi_obat,
    dosis_obat,
    efek_samping,
    peringatan,
    instruksi_penggunaan,
  } = req.body;
  try {
    const updateData = await prisma.obat.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        nama_obat: nama_obat,
        kategori_obat: kategori_obat,
        deskripsi_obat: deskripsi_obat,
        dosis_obat: dosis_obat,
        efek_samping: efek_samping,
        peringatan: peringatan,
        instruksi_penggunaan: instruksi_penggunaan,
      },
    });
    res.status(200).json(updateData);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// delete data
export const deleteDataObat = async (req, res) => {
  try {
    const deleteData = await prisma.obat.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(204).json(deleteData);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
