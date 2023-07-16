import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// get data
export const getDataPemeriksaanFisikRalanById = async (req, res) => {
  try {
    const data = await prisma.pemeriksaan_fisik_ralan.findFirst({
      where: {
        no_registrasi: req.params.id,
      },
      orderBy: {
        no_registrasi: "asc",
      },
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const postDataPemeriksaanFisikRalan = async (req, res) => {
  const {
    no_registrasi,
    id_pasien,
    kesadaran,
    tekanan_darah,
    nadi,
    pernafasan,
    suhu,
    tb,
    bb,
  } = req.body;

  try {
    const postData = await prisma.pemeriksaan_fisik_ralan.create({
      data: {
        no_registrasi: no_registrasi,
        id_pasien: id_pasien,
        kesadaran: kesadaran,
        tekanan_darah: tekanan_darah,
        nadi: nadi,
        pernafasan: pernafasan,
        suhu: suhu,
        tb: tb,
        bb: bb,
        // images: req.file.path,
      },
    });

    res.status(200).json(postData);
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

// update data
export const updateDataPemeriksaanFisikRalan = async (req, res) => {
  const {
    no_registrasi,
    id_pasien,
    kesadaran,
    tekanan_darah,
    nadi,
    pernafasan,
    suhu,
    tb,
    bb,
    images,
  } = req.body;
  try {
    const updateData = await prisma.pemeriksaan_fisik_ralan.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        no_registrasi: no_registrasi,
        id_pasien: id_pasien,
        kesadaran: kesadaran,
        tekanan_darah: tekanan_darah,
        nadi: nadi,
        pernafasan: pernafasan,
        suhu: suhu,
        tb: tb,
        bb: bb,
        images: images,
      },
    });
    res.status(200).json(updateData);
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
