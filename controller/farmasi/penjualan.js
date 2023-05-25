import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// get data
// note: filter penjualan: 1.by Date 2.nama obat
export const getPenjualanObat = async (req, res) => {
  const { search, page, limit, fromDate, toDate } = req.query;
  const searchQuery = search
    ? {
        OR: [
          { obat_data: { nama_obat: { contains: search } } },
          { tanggal_penjualan: { contains: search } },
        ],
        ...(fromDate &&
          toDate && {
            AND: [
              { tanggal_penjualan: { gte: fromDate } },
              { tanggal_penjualan: { lte: toDate } },
            ],
          }),
      }
    : {
        ...(fromDate &&
          toDate && {
            AND: [
              { tanggal_penjualan: { gte: fromDate } },
              { tanggal_penjualan: { lte: toDate } },
            ],
          }),
      };
  const pageNumber = parseInt(page) || 1;
  const limitNumber = parseInt(limit) || 10;
  const skipNumber = (pageNumber - 1) * limitNumber;
  try {
    const totalItems = await prisma.penjualan_obat.count({
      where: searchQuery,
    });
    const totalPages = Math.ceil(totalItems / limitNumber);

    const getData = await prisma.penjualan_obat.findMany({
      where: searchQuery,
      select: {
        id: true,
        obat_data: {
          select: {
            id: true,
            nama_obat: true,
          },
        },
        jumlah: true,
        harga_satuan: true,
        diskon: true,
        total_harga: true,
        tanggal_penjualan: true,
        informasi_pembayaran: true,
        metode_pembayaran: true,
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

// post
export const postPenjualanObat = async (req, res) => {
  const data = req.body;
  try {
    const postData = await Promise.all(
      data.map(async (item) => {
        const {
          id_obat,
          jumlah,
          harga_satuan,
          diskon,
          total_harga,
          tanggal_penjualan,
          informasi_pembayaran,
          metode_pembayaran,
        } = item;

        return prisma.penjualan_obat.create({
          data: {
            id_obat,
            jumlah,
            harga_satuan,
            diskon,
            total_harga,
            tanggal_penjualan,
            informasi_pembayaran,
            metode_pembayaran,
          },
        });
      })
    );
    res.status(201).json(postData);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
// edit data
export const updatePenjualanObat = async (req, res) => {
  const {
    id_obat,
    jumlah,
    harga_satuan,
    diskon,
    total_harga,
    tanggal_penjualan,
    informasi_pembayaran,
    metode_pembayaran,
  } = req.body;
  try {
    const updateData = await prisma.penjualan_obat.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        id_obat: id_obat,
        jumlah: jumlah,
        harga_satuan: harga_satuan,
        diskon: diskon,
        total_harga: total_harga,
        tanggal_penjualan: tanggal_penjualan,
        informasi_pembayaran: informasi_pembayaran,
        metode_pembayaran: metode_pembayaran,
      },
    });
    res.status(200).json(updateData);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// delete data
export const deletePenjualanObat = async (req, res) => {
  try {
    const deleteData = await prisma.penjualan_obat.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(204).json(deleteData);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
