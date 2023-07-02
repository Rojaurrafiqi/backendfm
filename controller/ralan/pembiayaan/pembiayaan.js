import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//get pasien ralan by id
export const getDataAsuransi = async (req, res) => {
  const { ruangan } = req.query;
  try {
    const data = await prisma.tbl_mst_asuransi.findMany({
      select: {
        id_asuransi: true,
        nama_asuransi: true,
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
