import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getDataListTagihanPasien = async (req, res) => {
  try {
    const getData = await prisma.pasien_ralan.findMany({
      where: {
        isCheckout_Poli: 1,
        isKasir: "0",
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

export const getTotalTagihanPasienRalan = async (req, res) => {
  try {
    const getDataJualBarang = await prisma.jual_barang_detail.findMany({
      where: {
        no_registrasi: req.params.id,
      },
    });
    const getDataTindakan = await prisma.tindakan_ralan.findMany({
      where: {
        no_registrasi: req.params.id,
      },
    });

    const totalTransaksiJualBarang = getDataJualBarang.reduce(
      (sum, item) => sum + Number(item.status_harus_bayar),
      0
    );

    const totalTarifTindakan = getDataTindakan.reduce(
      (sum, item) => sum + Number(item.tarif),
      0
    );

    const totalTagihanPasienRalan =
      totalTransaksiJualBarang + totalTarifTindakan;

    res.status(200).json({ totalTagihan: totalTagihanPasienRalan });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

//update status pasien ralan checkout kasir
export const statusCheckoutKasir = async (req, res) => {
  try {
    const updateData = await prisma.pasien_ralan.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        isKasir: "1",
      },
    });
    res.status(200).json(updateData);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
