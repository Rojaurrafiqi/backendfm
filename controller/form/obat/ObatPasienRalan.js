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
    catatan,
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
        catatan: catatan,
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
        no_registrasi: req.params.id,
      },
      select: {
        id: true,
        no_transaksi: true,
        no_registrasi: true,
        resep: true,
        no_urut: true,
        data_barang: {
          select: {
            id_barang: true,
            nama_barang_lengkap: true,
          },
        },
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

// pengecekan no urutan obat pada resep obat umum atau general
export const ceknoRTObatResepUmum = async (req, res) => {
  try {
    const response = await prisma.jual_barang_detail.findFirst({
      where: {
        no_registrasi: req.params.id,
        resep: {
          startsWith: "RT",
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    if (response) {
      const regex = /^([A-Z]+)(\d+)$/;
      const match = response.resep.match(regex);

      if (match) {
        const prefix = match[1];
        const number = parseInt(match[2]);
        const nextNumber = number + 1;

        const newResep = `${prefix}${nextNumber}`;
        res.status(200).json({ next_rt: newResep });
      } else {
        res.status(200).json({ next_rt: null });
      }
    } else {
      res.status(200).json({ next_rt: "RT1" });
    }
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const getDataObatGeneralPasienRalan = async (req, res) => {
  try {
    const data = await prisma.jual_barang_detail.findMany({
      where: {
        no_registrasi: req.params.id,
        resep: {
          startsWith: "RT",
        },
      },
      select: {
        id: true,
        no_transaksi: true,
        no_registrasi: true,
        resep: true,
        no_urut: true,
        data_barang: {
          select: {
            id_barang: true,
            nama_barang_lengkap: true,
          },
        },
        racikan_jumlah: true,
        racikan_jumlah_diambil: true,
        racikan_kemasan: true,
        catatan: true,
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
