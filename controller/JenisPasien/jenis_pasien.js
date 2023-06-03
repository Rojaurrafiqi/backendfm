import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getTipePasien = async (req, res) => {
  try {
    const getData = await prisma.tipe_pasien.findMany({
      select: {
        id: true,
        jenis_tipe_pasien: true,
      },
    });
    res.status(200).json(getData);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
