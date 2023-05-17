import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getDataKamar = async (req, res) => {
  const { filter, page, limit } = req.query;
  const filterQuery = filter
    ? {
        OR: [{ status_kamar: { contains: filter } }],
      }
    : {};
  const pageNumber = parseInt(page) || 1;
  const limitNumber = parseInt(limit) || 10;
  const skipNumber = (pageNumber - 1) * limitNumber;

  try {
    const totalItems = await prisma.kamar_ranap.count({ where: filterQuery });
    const totalPages = Math.ceil(totalItems / limitNumber);

    const dataKamar = await prisma.kamar_ranap.findMany({
      where: filterQuery,
      select: {
        id: true,
        no_kamar: true,
        no_bad: true,
        status_kamar: true,
        tipe_kamar: true,
      },
      skip: skipNumber,
      take: limitNumber,
    });
    res.status(200).json({
      data: dataKamar,
      totalItems,
      totalPages,
      currentPage: pageNumber,
    });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const postDataKamar = async (req, res) => {
  const { no_kamar, no_bad, tipe_kamar, status_kamar } = req.body;
  try {
    const postData = await prisma.kamar_ranap.create({
      data: {
        no_kamar: no_kamar,
        tipe_kamar: tipe_kamar,
        status_kamar: status_kamar,
        no_bad: no_bad,
      },
    });
    res.status(200).json(postData);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteDataKamar = async (req, res) => {
  try {
    const deleteData = await prisma.kamar_ranap.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.status(200).json(deleteData);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
