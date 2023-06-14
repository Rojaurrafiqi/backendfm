import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getDataListTagihanPasien = async (req, res) => {
  try {
    const getData = await prisma.pasien_ralan.findMany({
      where: {
        isCheckout_Poli: 1,
      },
      select: {
        id: true,
        no_registrasi: true,
        pasien_rm: {
          select: {
            id: true,
            no_rm: true,
            nama_lengkap: true,
            kelamin: true,
            agama: true,
            kontak_pasien: true,
            alamat_pasien_provinsi: true,
            alamat_pasien_detail: true,
          },
        },
        poliklinik: true,
        dokter: true,
        jenis_pasien: true,
        jenis_konsultasi: true,
        no_antrian: true,
        deposit: true,
      },
    });
    res.status(200).json(getData);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
