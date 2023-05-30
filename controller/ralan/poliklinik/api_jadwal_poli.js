// api jadwal poli ini dipakai untuk fetch jadwal secara dynamic dropdown di frontend pada bagian pendaftaran pasien rawat jalan

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getPoliById = async (req, res) => {
  try {
    const getData = await prisma.jadwal_poliklinik.findMany({
      where: {
        id_poli: Number(req.params.id),
      },
      select: {
        id: true,
        id_poli: true,
        id_hari: true,
        id_dokter: true,
        jam: true,
      },
    });
    res.status(200).json(getData);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
