import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getTipePembayaran = async (req, res) => {
  try {
    const getData = await prisma.pembayaran.findMany({
      select: {
        id: true,
        jenis_pembayaran: true,
      },
    });
    res.status(200).json(getData);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
