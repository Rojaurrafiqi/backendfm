import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const postPenjualanBarang = async (req, res) => {
  const {
    no_transaksi,
    no_registrasi,
    id_ruang_sumber_obat,
    id_apotek,
    jenis_penjualan,
    id_pasien,
    id_dokter,
    id_apoteker,
    nama_pasien_luar,
    nama_dokter_luar,
    status_ambil_resep,
    nilai_asuransi_bayar,
    diskon,
    total_transaksi,
    nilai_pasien_bayar,
  } = req.body;
  try {
    // pengecekan apakah data untuk no_registrasi yang dikirmkan telah terdaftar atau blm. jika sudah maka hanya update pembaruan data terbaru saja
    const existingData = await prisma.jual_barang.findFirst({
      where: {
        no_registrasi: req.params.id,
      },
    });

    if (existingData) {
      // If the data already exists, update it
      const updatedData = await prisma.jual_barang.update({
        where: {
          id: existingData.id,
        },
        data: {
          no_transaksi: no_transaksi,
          no_registrasi: no_registrasi,
          id_ruang_sumber_obat: id_ruang_sumber_obat,
          id_apotek: id_apotek,
          jenis_penjualan: jenis_penjualan,
          id_pasien: id_pasien,
          id_dokter: id_dokter,
          id_apoteker: id_apoteker,
          nama_pasien_luar: nama_pasien_luar,
          nama_dokter_luar: nama_dokter_luar,
          status_ambil_resep: status_ambil_resep,
          nilai_asuransi_bayar: nilai_asuransi_bayar,
          nilai_pasien_bayar: nilai_pasien_bayar,
          diskon: diskon,
          total_transaksi: total_transaksi,
        },
      });
      res.status(200).json(updatedData);
    } else {
      // If the data doesn't exist, create new data
      const newData = await prisma.jual_barang.create({
        data: {
          no_transaksi: no_transaksi,
          no_registrasi: no_registrasi,
          id_ruang_sumber_obat: id_ruang_sumber_obat,
          id_apotek: id_apotek,
          jenis_penjualan: jenis_penjualan,
          id_pasien: id_pasien,
          id_dokter: id_dokter,
          id_apoteker: id_apoteker,
          nama_pasien_luar: nama_pasien_luar,
          nama_dokter_luar: nama_dokter_luar,
          status_ambil_resep: status_ambil_resep,
          nilai_asuransi_bayar: nilai_asuransi_bayar,
          nilai_pasien_bayar: nilai_pasien_bayar,
          diskon: diskon,
          total_transaksi: total_transaksi,
        },
      });
      res.status(200).json(newData);
    }
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

// menghitung total transaksi pada table penjualan_barang_detail
export const hitungTotalTransaksi = async (req, res) => {
  try {
    const response = await prisma.jual_barang_detail.findMany({
      where: { no_registrasi: req.params.id },
    });

    const totalTransaksi = response.reduce(
      (sum, item) => sum + Number(item.status_harus_bayar),
      0
    );

    res.status(200).json({ totalTransaksi });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const deleteBarangPasienRalan = async (req, res) => {
  try {
    const deleteData = await prisma.jual_barang_detail.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.status(200).json(deleteData);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
