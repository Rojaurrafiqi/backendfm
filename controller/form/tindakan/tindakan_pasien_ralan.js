import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getTindakanPasienRalan = async (req, res) => {
  const { noreg } = req.query;
  try {
    const getData = await prisma.tindakan_ralan.findMany({
      where: {
        no_registrasi: noreg,
      },
      select: {
        id: true,
        no_registrasi: true,
        tindakan: {
          select: {
            id: true,
            nama_tindakan: true,
          },
        },
        tarif: true,
        poli: true,
        catatan: true,
        nama_pasien: true,
        nama_dokter: true,
      },
    });
    res.status(201).json(getData);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
export const postDataTindakanPasienRalan = async (req, res) => {
  const {
    no_registrasi,
    nama_pasien,
    nama_dokter,
    id_tindakan,
    catatan,
    tarif,
    poli,
  } = req.body;
  try {
    const postData = await prisma.tindakan_ralan.create({
      data: {
        no_registrasi: no_registrasi,
        nama_pasien: nama_pasien,
        nama_dokter: nama_dokter,
        id_tindakan: id_tindakan,
        catatan: catatan,
        tarif: tarif,
        poli: poli,
      },
    });
    res.status(200).json(postData);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteTindakanPasienRalan = async (req, res) => {
  try {
    const deleteData = await prisma.tindakan_ralan.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.status(200).json(deleteData);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const getDataTindakanPasienRalanById = async (req, res) => {
  try {
    const data = await prisma.tindakan_ralan.findMany({
      where: {
        no_registrasi: req.params.id,
      },
      select: {
        id: true,
        no_registrasi: true,
        catatan: true,
        tarif: true,
        poli: true,
        tindakan: {
          select: {
            id: true,
            nama_tindakan: true,
          },
        },
      },
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
