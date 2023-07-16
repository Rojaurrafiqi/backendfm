import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// post data
export const postDataPengkajianAwalRalan = async (req, res) => {
  const {
    no_registrasi,
    id_pasien,
    tgl_periksa,
    jam_periksa,
    wawancara,
    isAlergi,
    alergi_obat,
    alergi_makanan,
    alergi_udara,
    alergi_lainya,
    isKawin,
    grafida,
    partus,
    abortus,
    isImunisasi,
    tumbuh_kembang,
    riwayat_penyakit_keluarga,
    riwayat_penyakit_terdahulu,
    keluhan_utama,
    anamnesis,
  } = req.body;
  try {
    const postData = await prisma.form_pengkajian_awal_medis_ralan.create({
      data: {
        no_registrasi: no_registrasi,
        id_pasien: id_pasien,
        tgl_periksa: tgl_periksa,
        jam_periksa: jam_periksa,
        wawancara: wawancara,
        isAlergi: isAlergi,
        alergi_obat: alergi_obat,
        alergi_makanan: alergi_makanan,
        alergi_udara: alergi_udara,
        alergi_lainya: alergi_lainya,
        isKawin: isKawin,
        grafida: grafida,
        partus: partus,
        abortus: abortus,
        keluhan_utama: keluhan_utama,
        anamnesis: anamnesis,
        isImunisasi: isImunisasi,
        tumbuh_kembang: tumbuh_kembang,
        riwayat_penyakit_keluarga: riwayat_penyakit_keluarga,
        riwayat_penyakit_terdahulu: riwayat_penyakit_terdahulu,
      },
    });
    res.status(200).json(postData);
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
// get data
export const getDataPengkajianAwalRalan = async (req, res) => {
  try {
    const data = await prisma.form_pengkajian_awal_medis_ralan.findMany({});
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

// get data
export const getDataPengkajianAwalRalanById = async (req, res) => {
  try {
    const data = await prisma.form_pengkajian_awal_medis_ralan.findFirst({
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

// update data
export const updateDataPengkajianAwalRalan = async (req, res) => {
  const {
    no_registrasi,
    id_pasien,
    tgl_periksa,
    jam_periksa,
    wawancara,
    isAlergi,
    alergi_obat,
    alergi_makanan,
    alergi_udara,
    alergi_lainya,
    isKawin,
    grafida,
    partus,
    abortus,
    isImunisasi,
    tumbuh_kembang,
    riwayat_penyakit_keluarga,
    riwayat_penyakit_terdahulu,
    keluhan_utama,
    anamnesis,
  } = req.body;
  try {
    const updateData = await prisma.form_pengkajian_awal_medis_ralan.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        no_registrasi: no_registrasi,
        id_pasien: id_pasien,
        tgl_periksa: tgl_periksa,
        jam_periksa: jam_periksa,
        wawancara: wawancara,
        isAlergi: isAlergi,
        alergi_obat: alergi_obat,
        alergi_makanan: alergi_makanan,
        alergi_udara: alergi_udara,
        alergi_lainya: alergi_lainya,
        isKawin: isKawin,
        grafida: grafida,
        partus: partus,
        abortus: abortus,
        keluhan_utama: keluhan_utama,
        anamnesis: anamnesis,
        isImunisasi: isImunisasi,
        tumbuh_kembang: tumbuh_kembang,
        riwayat_penyakit_keluarga: riwayat_penyakit_keluarga,
        riwayat_penyakit_terdahulu: riwayat_penyakit_terdahulu,
      },
    });
    res.status(200).json(updateData);
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
