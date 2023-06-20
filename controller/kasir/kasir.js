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
            no_mr: true,
            nama_user: true,
            id_jk: true,
            id_agama: true,
            no_hp: true,
            // alamat_pasien_provinsi: true,
            // alamat_pasien_detail: true,
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

export const postBillDetail = async (req, res) => {
  const data = req.body;
  try {
    const postData = await Promise.all(
      data.map(async (listItem) => {
        const {
          no_bill,
          no_registrasi,
          id_pasien,
          asuransi,
          item,
          js,
          jp,
          harga,
          catatan,
        } = listItem;

        return prisma.bill_detail.create({
          data: {
            no_bill,
            no_registrasi,
            id_pasien,
            asuransi,
            item,
            js,
            jp,
            harga,
            catatan,
          },
        });
      })
    );
    res.status(201).json(postData);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const postBill = async (req, res) => {
  const {
    no_bill,
    id_dokter,
    id_pasien,
    id_poli,
    asuransi,
    status,
    no_registrasi,
    diskon,
    total,
    catatan,
  } = req.body;
  try {
    const postData = await prisma.bill.create({
      data: {
        no_bill: no_bill,
        no_registrasi: no_registrasi,
        id_dokter: id_dokter,
        id_pasien: id_pasien,
        id_poli: id_poli,
        asuransi: asuransi,
        status: status,
        diskon: diskon,
        total: total,
        catatan: catatan,
      },
    });

    res.status(201).json(postData);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
