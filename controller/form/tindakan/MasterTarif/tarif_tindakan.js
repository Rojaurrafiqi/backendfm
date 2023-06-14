import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getDataTarifTindakan = async (req, res) => {
  const { search, page, limit } = req.query;
  const searchQuery = search
    ? {
        OR: [{ nama_tindakan: { contains: search } }],
      }
    : {};
  const pageNumber = parseInt(page) || 1;
  const limitNumber = parseInt(limit) || 10;
  const skipNumber = (pageNumber - 1) * limitNumber;

  try {
    const totalItems = await prisma.tarif_tindakan.count({
      where: searchQuery,
    });
    const totalPages = Math.ceil(totalItems / limitNumber);

    const dataTarif = await prisma.tarif_tindakan.findMany({
      where: searchQuery,
      //   select: {
      //     id: true,
      //     no_kamar: true,
      //     no_bad: true,
      //     status_kamar: true,
      //     tipe_kamar: true,
      //   },
      skip: skipNumber,
      take: limitNumber,
    });
    res.status(200).json({
      data: dataTarif,
      totalItems,
      totalPages,
      currentPage: pageNumber,
    });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const getDataTarifTindakanById = async (req, res) => {
  try {
    const dataById = await prisma.tarif_tindakan.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.status(200).json(dataById);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
