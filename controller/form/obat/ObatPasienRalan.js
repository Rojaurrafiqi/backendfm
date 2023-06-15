import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//data obat atau resep yang diberikan kepada pasien diambil dari table penjualan obat kepada pasien, karena fungsi dan tujuanyya sama untuk mendapatkan obat yang diberikan kepada pasien
export const getDataObatPasienRalan = async (req, res) => {
  try {
    const data = await prisma.jual_barang_detail.findMany({});
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const postDataObatPasienRalan = async (req, res) => {
  const {
    no_transaksi,
    no_registrasi,
    resep,
    no_urut,
    id_barang,
    racikan_jumlah,
    racikan_jumlah_diambil,
    racikan_kemasan,
    qty,
    satuan,
    aturan_pakai,
    harga_jual,
    status_harus_bayar,
  } = req.body;
  try {
    const postData = await prisma.jual_barang_detail.create({
      data: {
        no_transaksi: no_transaksi,
        no_registrasi: no_registrasi,
        resep: resep,
        no_urut: no_urut,
        id_barang: id_barang,
        racikan_jumlah: racikan_jumlah,
        racikan_jumlah_diambil: racikan_jumlah_diambil,
        racikan_kemasan: racikan_kemasan,
        qty: qty,
        satuan: satuan,
        aturan_pakai: aturan_pakai,
        harga_jual: harga_jual,
        status_harus_bayar: status_harus_bayar,
      },
    });
    res.status(200).json(postData);
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

export const getDataObatPasienRalanById = async (req, res) => {
  try {
    const data = await prisma.jual_barang_detail.findMany({
      where: {
        no_transaksi: req.params.id,
      },
      select: {
        id: true,
        no_transaksi: true,
        no_registrasi: true,
        resep: true,
        no_urut: true,
        id_barang: true,
        racikan_jumlah: true,
        racikan_jumlah_diambil: true,
        racikan_kemasan: true,
        qty: true,
        satuan: true,
        aturan_pakai: true,
        harga_jual: true,
        status_harus_bayar: true,
      },
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
