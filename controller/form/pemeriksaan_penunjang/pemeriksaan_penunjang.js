import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import path from "path";

// get data
export const getDataPemeriksaanPenunjangRalanById = async (req, res) => {
  try {
    const data = await prisma.pemeriksaan_penunjang_ralan.findFirst({
      where: {
        no_registrasi: req.params.id,
      },
      orderBy: {
        id: "desc",
      },
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

// post data
export const postDataPemeriksaanPenunjangRalan = async (req, res) => {
  const {
    no_registrasi,
    id_pasien,
    hasil_lab_rutin,
    pemeriksaan_penunjang_lain,
    ringkasan,
  } = req.body;
  try {
    const postData = await prisma.pemeriksaan_penunjang_ralan.create({
      data: {
        no_registrasi: no_registrasi,
        id_pasien: parseInt(id_pasien),
        hasil_lab_rutin: hasil_lab_rutin,
        pemeriksaan_penunjang_lain: pemeriksaan_penunjang_lain,
        ringkasan: ringkasan,
        berkas: req.file?.path,
      },
    });
    res.status(200).json(postData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// file2: req.file[1]?.path,
// file3: req.file[2]?.path,
// update data
export const updateDataPemeriksaanPenunjangRalan = async (req, res) => {
  const {
    no_registrasi: no_registrasi,
    id_pasien: id_pasien,
    hasil_lab_rutin: hasil_lab_rutin,
    pemeriksaan_penunjang_lain: pemeriksaan_penunjang_lain,
    ringkasan: ringkasan,
  } = req.body;
  try {
    const updateData = await prisma.pemeriksaan_penunjang_ralan.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        no_registrasi: no_registrasi,
        id_pasien: id_pasien,
        hasil_lab_rutin: hasil_lab_rutin,
        pemeriksaan_penunjang_lain: pemeriksaan_penunjang_lain,
        ringkasan: ringkasan,
        file1: req.files[0]?.path,
        file2: req.files[1]?.path,
        file3: req.files[2]?.path,
      },
    });
    res.status(200).json(updateData);
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
