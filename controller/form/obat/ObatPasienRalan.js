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

export const getDataObatPasienRalanRacikan = async (req, res) => {
  try {
    const data = await prisma.jual_barang_detail.findMany({
      where: {
        no_registrasi: req.params.id,
        resep: "RR",
      },
    });

    const data_racikan = await prisma.jual_barang_detail_racikan.findMany({
      where: {
        no_registrasi: req.params.id,
        resep: "RR",
      },
    });

    res.status(200).json();
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
    resep_ke,
    jenis_resep,
  } = req.body;
  try {
    const postData = await prisma.jual_barang_detail.create({
      data: {
        no_transaksi: no_transaksi,
        no_registrasi: no_registrasi,
        resep: resep,
        resep_ke: resep_ke,
        no_urut: no_urut,
        id_barang: id_barang,
        jenis_resep: jenis_resep,
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
    const dataRR = await prisma.jual_barang_detail.findMany({
      where: {
        no_registrasi: req.params.id,
        resep: "RR",
      },

      select: {
        id: true,
        no_transaksi: true,
        no_registrasi: true,
        resep: true,
        resep_ke: true,
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
      orderBy: {
        resep_ke: "asc",
      },
    });
    const dataRT = await prisma.jual_barang_detail.findMany({
      where: {
        no_registrasi: req.params.id,
        resep: "RT",
      },

      select: {
        id: true,
        no_transaksi: true,
        no_registrasi: true,
        resep: true,
        resep_ke: true,
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
      orderBy: {
        resep_ke: "asc",
      },
    });

    const mergedData = [...dataRR, ...dataRT];

    res.status(200).json(mergedData);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

// pengecekan resep_ke  pada resep obat umum atau general
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
        createdAt: "asc",
      },
    });
    if (response) {
      const nextResepRT = Number(response.resep_ke) + 1;
      res.status(200).json({ nextResepRT: nextResepRT });
    } else {
      res.status(200).json({ nextResepRT: 1 });
    }
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

// pengecekan no urutan obat pada resep obat racikan
export const cekNoUrutResepRacikan = async (req, res) => {
  try {
    const response = await prisma.jual_barang_detail.findFirst({
      where: {
        no_registrasi: req.params.id,
        resep_ke: Number(req.params.resepke),
        resep: "RR",
      },
      orderBy: {
        no_urut: "desc",
      },
    });
    if (response) {
      const nextUrutanRR = response.no_urut + 1;
      res.status(200).json({ nextUrutanRR: nextUrutanRR });
    } else {
      res.status(200).json({ nextUrutanRR: 1 });
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

export const getDataObatRacikanPasienRalan = async (req, res) => {
  try {
    const data = await prisma.jual_barang_detail.findMany({
      where: {
        no_registrasi: req.params.id,
        resep: {
          startsWith: "RR",
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
