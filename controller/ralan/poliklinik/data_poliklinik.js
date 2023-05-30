import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getDataPoliklinik = async (req, res) => {
  try {
    const getData = await prisma.poliklinik.findMany({
      select: {
        id: true,
        nama_poliklinik: true,
      },
    });
    res.status(200).json(getData);
  } catch (error) {
    res.status(404).json({ msg: message.error });
  }
};

export const postDataPoliklinik = async (req, res) => {
  const { nama_poliklinik } = req.body;
  try {
    const postData = await prisma.poliklinik.create({
      data: {
        nama_poliklinik: nama_poliklinik,
      },
    });
    res.status(200).json(postData);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteDataPoliklinik = async (req, res) => {
  try {
    const deleteData = await prisma.poliklinik.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.status(200).json(deleteData);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
