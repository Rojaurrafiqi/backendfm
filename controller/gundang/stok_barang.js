import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// get data stok barang di gudang
export const getDataStokBarangGudang = async (req, res) => {
  const { search, page, limit, date } = req.query;
  const searchQuery = search
    ? {
        OR: [
          { data_barang: { nama_barang: { contains: search } } },
          //   { : { contains: search } },
        ],
      }
    : {};
  const pageNumber = parseInt(page) || 1;
  const limitNumber = parseInt(limit) || 10;
  const skipNumber = (pageNumber - 1) * limitNumber;
  try {
    const totalItems = await prisma.stok_barang.count({
      where: searchQuery,
    });
    const totalPages = Math.ceil(totalItems / limitNumber);

    const getData = await prisma.stok_barang.findMany({
      where: searchQuery,
      select: {
        id: true,
        stok_gudang: true,
        stok_pinjam: true,
        stok_min: true,
        harga_pokok: true,
        tgl_expired: true,
        no_batch: true,
        lokasi: true,
        data_barang: {
          select: {
            id_barang: true,
            nama_barang: true,
            nama_alias: true,
            nama_barang_lengkap: true,
            kandungan_isi: true,
            kandungan_satuan: true,
            kemasan: true,
            kemasan_satuan: true,
            barang_kategori: {
              select: {
                id_kategori: true,
                nama_kategori: true,
              },
            },
          },
        },
      },
      orderBy: {
        stok_gudang: "desc", // Mengurutkan berdasarkan stok_gudang secara menurun
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

export const getDataStokBarangGudangById = async (req, res) => {
  try {
    const data = await prisma.stok_barang.findUnique({
      where: {
        id: Number(req.params.id),
      },
      select: {
        id: true,
        harga_pokok: true,
        data_barang: {
          select: {
            id_barang: true,
            nama_barang: true,
          },
        },
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
