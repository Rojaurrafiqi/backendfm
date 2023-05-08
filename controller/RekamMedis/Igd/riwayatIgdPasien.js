import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// dapatkan data pasien berdasarkan no rm untuk riwayat berobat pasien di IGD
export const getRiwayatIgdPasien = async (req, res) => {
  try {
    const response = await prisma.pasien_igd.findMany({
      where: {
        id_pasien_rm: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
