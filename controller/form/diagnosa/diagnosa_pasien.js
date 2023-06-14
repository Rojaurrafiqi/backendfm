import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getDiagnosaPasien = async (req, res) => {
  const { noreg } = req.query;
  try {
    const getData = await prisma.diagnosa_pasien.findMany({
      where: {
        no_registrasi: noreg,
      },
    });
    res.status(201).json(getData);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const postDataDiagnosaPasien = async (req, res) => {
  const {
    no_registrasi,
    tgl_masuk,
    id_pasien,
    no_rm,
    code_diagnosa,
    diagnosa,
    keterangan,
  } = req.body;
  try {
    const postData = await prisma.diagnosa_pasien.create({
      data: {
        no_registrasi: no_registrasi,
        tgl_masuk: tgl_masuk,
        id_pasien: id_pasien,
        no_rm: no_rm,
        code_diagnosa: code_diagnosa,
        diagnosa: diagnosa,
        keterangan: keterangan,
      },
    });
    res.status(200).json(postData);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteDiagnosaPasien = async (req, res) => {
  try {
    const deleteData = await prisma.diagnosa_pasien.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.status(200).json(deleteData);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
