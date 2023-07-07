import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getDataPasienByIdPasien = async (req, res) => {
  try {
    const response = await prisma.rekam_medis_pasien.findUnique({
      where: {
        id: Number(req.params.id),
      },
      select: {
        id: true,
        no_mr: true,
        gelar_dpn: true,
        nama_user: true,
        gelar_blk: true,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
