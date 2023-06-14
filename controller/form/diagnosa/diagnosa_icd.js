import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getDataDiagnosaIcd = async (req, res) => {
  const { search, page, limit } = req.query;
  const filterQuery = search
    ? {
        OR: [
          { code_dx: { contains: search } },
          { description: { contains: search } },
          { keterangan: { contains: search } },
        ],
      }
    : {};
  const pageNumber = parseInt(page) || 1;
  const limitNumber = parseInt(limit) || 10;
  const skipNumber = (pageNumber - 1) * limitNumber;

  try {
    const totalItems = await prisma.icd.count({
      where: filterQuery,
    });
    const totalPages = Math.ceil(totalItems / limitNumber);

    const dataDiagnosa = await prisma.icd.findMany({
      where: filterQuery,
      skip: skipNumber,
      take: limitNumber,
    });
    res.status(200).json({
      data: dataDiagnosa,
      totalItems,
      totalPages,
      currentPage: pageNumber,
    });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const getDataDiagnosaIcdById = async (req, res) => {
  try {
    const dataById = await prisma.icd.findUnique({
      where: {
        id_icd: parseInt(req.params.id),
      },
    });
    res.status(200).json(dataById);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
