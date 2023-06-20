import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// get semua data obat di gundang
export const getDataGudang = async (req, res) => {
  const { search, page, limit, date } = req.query;
  const searchQuery = search
    ? {
        OR: [{ nama_barang_lengkap: { contains: search } }],
        OR: [{ nama_alias: { contains: search } }],
      }
    : {};
  const pageNumber = parseInt(page) || 1;
  const limitNumber = parseInt(limit) || 10;
  const skipNumber = (pageNumber - 1) * limitNumber;
  try {
    const totalItems = await prisma.barang.count({
      where: searchQuery,
    });
    const totalPages = Math.ceil(totalItems / limitNumber);

    const getData = await prisma.barang.findMany({
      where: searchQuery,
      select: {
        id_barang: true,
        nama_barang_lengkap: true,
        nama_alias: true,
        nama_barang: true,
        barang_kategori: {
          select: {
            id_kategori: true,
            nama_kategori: true,
            keterangan: true,
          },
        },
        grup_barang: {
          select: {
            id: true,
            grup: true,
          },
        },
        data_produsen: {
          select: {
            id_produsen: true,
            nama_produsen: true,
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
