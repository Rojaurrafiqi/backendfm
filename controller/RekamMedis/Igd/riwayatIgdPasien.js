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

export const getRiwayatRekamMedisById = async (req, res) => {
  try {
    const response = await prisma.tbl_medrec_lama.findMany({
      where: {
        id_pasien: req.params.id,
      },
      include: {
        medrec_dx_lama: true,
      },
    });

    // Convert BigInt values to strings because JSON does not recognize BigInt data type
    const serializedResponse = response.map((item) => {
      return {
        ...item,
        no_register: item.no_register?.toString(10), // Convert BigInt to string with radix 10
      };
    });

    res.status(200).json(serializedResponse);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
