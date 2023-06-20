import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getDataAntrianResep = async (req, res) => {
  const { search, page, limit } = req.query;
  const searchQuery = search
    ? {
        OR: [
          //   { dokter_data: { nama_dokter: { contains: search } } },
          { pasien_rm: { nama_user: { contains: search } } },
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
        isCheckout_Poli: 1,
        isResep: "1",
      },
    });

    const totalItems = countQuery;
    const totalPages = Math.ceil(totalItems / limitNumber);

    const getData = await prisma.pasien_ralan.findMany({
      where: {
        ...searchQuery,
        isCheckout_Poli: 1,
        isResep: "1",
      },
      select: {
        id: true,
        no_registrasi: true,
        pasien_rm: {
          select: {
            id: true,
            no_mr: true,
            nama_user: true,
          },
        },
        poliklinik: true,
        dokter: true,
        no_antrian: true,
        isKasir: true,
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

export const statusCheckoutFarmasi = async (req, res) => {
  try {
    const updateData = await prisma.pasien_ralan.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        isResep: "2", // tanda resep selesai
      },
    });
    res.status(200).json(updateData);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
