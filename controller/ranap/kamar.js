import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getDataKamar = async (req, res) => {
  try {
    const dataKamar = await prisma.kamar_ranap.findMany();
    res.status(200).json(dataKamar);
  } catch (error) {
    res.status(400).json({ msg: error.message });
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
    res.status(201).json(postData);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
