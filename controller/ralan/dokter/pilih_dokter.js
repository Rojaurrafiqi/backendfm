import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//get pasien ralan by id
export const getDokterPoli = async (req, res) => {
  const { ruangan } = req.query;
  try {
    const data = await prisma.rekam_medis_pasien.findMany({
      where: {
        id_ruangan: Number(ruangan),
        grup_user: 1,
      },
      select: {
        id: true,
        gelar_dpn: true,
        nama_user: true,
        gelar_blk: true,
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
