import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getDataPoliklinik = async (req, res) => {
  try {
    const getData = await prisma.tbl_mst_ruangan.findMany({
      where: {
        id_grup_ruangan: 11,
      },
      select: {
        id_ruangan: true,
        kode_bpjs: true,
        no_ruangan: true,
        nama_ruangan: true,
        ket_ruangan: true,
      },
    });
    res.status(200).json(getData);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const postDataPoliklinik = async (req, res) => {
  const { nama_ruangan, no_ruang, kode_bpjs, ket_ruangan } = req.body;
  try {
    const postData = await prisma.poliklinik.create({
      data: {
        nama_ruangan: nama_ruangan,
        kode_bpjs: kode_bpjs,
        no_ruang: no_ruang,
        ket_ruangan: ket_ruangan,
      },
    });
    res.status(200).json(postData);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteDataPoliklinik = async (req, res) => {
  try {
    const deleteData = await prisma.poliklinik.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.status(200).json(deleteData);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
