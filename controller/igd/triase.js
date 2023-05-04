import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//   get triase pasien igd
export const triase_pasien_igd = async (req, res) => {
  try {
    const response = await prisma.triase_pasien_igd.findMany({
      where: {
        id_pasien_igd: Number(req.params.id),
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 1,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

// tambah data triase pasien igd
export const add_triase_pasien_igd = async (req, res) => {
  const { id_pasien_igd, keluhan_utama } = req.body;
  try {
    const rm_Data = await prisma.triase_pasien_igd.create({
      data: {
        id_pasien_igd: id_pasien_igd,
        keluhan_utama: keluhan_utama,
      },
    });
    res.status(201).json(rm_Data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const Update_triase_pasien_igd = async (req, res) => {
  const { keluhan_utama } = req.body;

  try {
    const data = await prisma.triase_pasien_igd.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        keluhan_utama: keluhan_utama,
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//   get triase tanda vital
export const triase_tanda_vital_pasien_igd = async (req, res) => {
  try {
    const response = await prisma.triase_tanda_vital_pasien_igd.findMany({
      where: {
        id_pasien_igd: Number(req.params.id),
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 1,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

// tambah data triase pasien igd
export const add_triase_tanda_vital_pasien_igd = async (req, res) => {
  const {
    id_pasien_igd,
    tekanan_darah,
    frekuensi_nadi,
    frekuensi_nafas,
    suhu,
    sat_o2,
    riwayat_alergi_makanan,
    riwayat_alergi_obat,
    riwayat_alergi_lainya,
    berat_badan,
    tinggi_badan,
  } = req.body;
  try {
    const rm_Data = await prisma.triase_tanda_vital_pasien_igd.create({
      data: {
        id_pasien_igd: id_pasien_igd,
        tekanan_darah: tekanan_darah,
        frekuensi_nadi: frekuensi_nadi,
        frekuensi_nafas: frekuensi_nafas,
        suhu: suhu,
        sat_o2: sat_o2,
        riwayat_alergi_makanan: riwayat_alergi_makanan,
        riwayat_alergi_obat: riwayat_alergi_obat,
        riwayat_alergi_lainya: riwayat_alergi_lainya,
        berat_badan: berat_badan,
        tinggi_badan: tinggi_badan,
      },
    });
    res.status(201).json(rm_Data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const update_triase_tanda_vital_pasien_igd = async (req, res) => {
  const {
    id_pasien_igd,
    tekanan_darah,
    frekuensi_nadi,
    frekuensi_nafas,
    suhu,
    sat_o2,
    riwayat_alergi_makanan,
    riwayat_alergi_obat,
    riwayat_alergi_lainya,
    berat_badan,
    tinggi_badan,
  } = req.body;

  try {
    const data = await prisma.triase_tanda_vital_pasien_igd.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        id_pasien_igd: id_pasien_igd,
        tekanan_darah: tekanan_darah,
        frekuensi_nadi: frekuensi_nadi,
        frekuensi_nafas: frekuensi_nafas,
        suhu: suhu,
        sat_o2: sat_o2,
        riwayat_alergi_makanan: riwayat_alergi_makanan,
        riwayat_alergi_obat: riwayat_alergi_obat,
        riwayat_alergi_lainya: riwayat_alergi_lainya,
        berat_badan: berat_badan,
        tinggi_badan: tinggi_badan,
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//   get triase anamnesa
export const triase_anamnesa_pasien_igd = async (req, res) => {
  try {
    const response = await prisma.triase_anamnesa_pasien_igd.findMany({
      where: {
        id_pasien_igd: Number(req.params.id),
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 1,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

// tambah data triase pasien igd
export const add_triase_anamnesa_pasien_igd = async (req, res) => {
  const {
    id_pasien_igd,
    keluhan_utama,
    riwayat_perjalanan_penyakit,
    riwayat_penyakit_terdahulu,
    riwayat_pemakaian_obat,
    riwayat_penyakit_keluarga,
  } = req.body;
  try {
    const rm_Data = await prisma.triase_anamnesa_pasien_igd.create({
      data: {
        id_pasien_igd: id_pasien_igd,
        keluhan_utama: keluhan_utama,
        riwayat_perjalanan_penyakit: riwayat_perjalanan_penyakit,
        riwayat_penyakit_terdahulu: riwayat_penyakit_terdahulu,
        riwayat_pemakaian_obat: riwayat_pemakaian_obat,
        riwayat_penyakit_keluarga: riwayat_penyakit_keluarga,
      },
    });
    res.status(201).json(rm_Data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const update_triase_anamnesa_pasien_igd = async (req, res) => {
  const {
    id_pasien_igd,
    keluhan_utama,
    riwayat_perjalanan_penyakit,
    riwayat_penyakit_terdahulu,
    riwayat_pemakaian_obat,
    riwayat_penyakit_keluarga,
  } = req.body;

  try {
    const data = await prisma.triase_anamnesa_pasien_igd.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        id_pasien_igd: id_pasien_igd,
        keluhan_utama: keluhan_utama,
        riwayat_perjalanan_penyakit: riwayat_perjalanan_penyakit,
        riwayat_penyakit_terdahulu: riwayat_penyakit_terdahulu,
        riwayat_pemakaian_obat: riwayat_pemakaian_obat,
        riwayat_penyakit_keluarga: riwayat_penyakit_keluarga,
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//   get triase pemeriksaan fisik
export const triase_pemeriksaan_fisik_pasien_igd = async (req, res) => {
  try {
    const response = await prisma.triase_pemeriksaan_fisik_pasien_igd.findMany({
      where: {
        id_pasien_igd: Number(req.params.id),
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 1,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

// tambah data triase pemeriksaan fisik pasien igd
export const add_triase_pemeriksaan_fisik_pasien_igd = async (req, res) => {
  const {
    id_pasien_igd,
    mata,
    telinga,
    hidung,
    mulut,
    tenggorokan,
    leher,
    paru,
    jantung,
    abdomen,
    kandungan,
    kemaluan,
    exstremitas,
    status_lokalis,
    pemeriksaan_gigi,
  } = req.body;
  try {
    const rm_Data = await prisma.triase_pemeriksaan_fisik_pasien_igd.create({
      data: {
        id_pasien_igd: id_pasien_igd,
        mata: mata,
        telinga: telinga,
        hidung: hidung,
        mulut: mulut,
        tenggorokan: tenggorokan,
        leher: leher,
        paru: paru,
        jantung: jantung,
        abdomen: abdomen,
        kandungan: kandungan,
        kemaluan: kemaluan,
        exstremitas: exstremitas,
        status_lokalis: status_lokalis,
        pemeriksaan_gigi: pemeriksaan_gigi,
      },
    });
    res.status(201).json(rm_Data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// update triase pemeriksaan fisik pasien igd

export const update_triase_pemeriksaan_fisik_pasien_igd = async (req, res) => {
  const {
    id_pasien_igd,
    mata,
    telinga,
    hidung,
    mulut,
    tenggorokan,
    leher,
    paru,
    jantung,
    abdomen,
    kandungan,
    kemaluan,
    exstremitas,
    status_lokalis,
    pemeriksaan_gigi,
  } = req.body;

  try {
    const data = await prisma.triase_pemeriksaan_fisik_pasien_igd.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        id_pasien_igd: id_pasien_igd,
        mata: mata,
        telinga: telinga,
        hidung: hidung,
        mulut: mulut,
        tenggorokan: tenggorokan,
        leher: leher,
        paru: paru,
        jantung: jantung,
        abdomen: abdomen,
        kandungan: kandungan,
        kemaluan: kemaluan,
        exstremitas: exstremitas,
        status_lokalis: status_lokalis,
        pemeriksaan_gigi: pemeriksaan_gigi,
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//   get triase pemeriksaan penunjang
export const triase_pemeriksaan_penunjang_pasien_igd = async (req, res) => {
  try {
    const response =
      await prisma.triase_pemeriksaan_penunjang_pasien_igd.findMany({
        where: {
          id_pasien_igd: Number(req.params.id),
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

// tambah data triase pemeriksaan penunjang pasien igd
export const add_triase_pemeriksaan_penunjang_pasien_igd = async (req, res) => {
  const {
    id_pasien_igd,
    diagnosa_sementara,
    diagnosa_tambahan,
    jenis_pemeriksaan,
  } = req.body;
  try {
    const rm_Data = await prisma.triase_pemeriksaan_penunjang_pasien_igd.create(
      {
        data: {
          id_pasien_igd: id_pasien_igd,
          jenis_pemeriksaan: jenis_pemeriksaan,
          diagnosa_tambahan: diagnosa_tambahan,
          diagnosa_sementara: diagnosa_sementara,
        },
      }
    );
    res.status(201).json(rm_Data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// update triase pemeriksaan penunjang pasien igd

export const update_triase_pemeriksaan_penunjang_pasien_igd = async (
  req,
  res
) => {
  const {
    id_pasien_igd,
    diagnosa_tambahan,
    diagnosa_sementara,
    jenis_pemeriksaan,
  } = req.body;

  try {
    const data = await prisma.triase_pemeriksaan_penunjang_pasien_igd.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        id_pasien_igd: id_pasien_igd,
        jenis_pemeriksaan: jenis_pemeriksaan,
        diagnosa_sementara: diagnosa_sementara,
        diagnosa_tambahan: diagnosa_tambahan,
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//   get triase pemeriksaan penunjang
export const triase_ats_pasien_igd = async (req, res) => {
  try {
    const response = await prisma.triase_ats_pasien_igd.findMany({
      where: {
        id_pasien_igd: Number(req.params.id),
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 1,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

// tambah data triase pemeriksaan penunjang pasien igd
export const add_triase_ats_pasien_igd = async (req, res) => {
  const {
    id_pasien_igd,
    jalan_nafas,
    pernafasan_dewasa,
    pernafasan_anak,
    sirkulasi_dewasa,
    sirkulasi_anak,
    mental_status,
    skor_nyeri,
    assesment_triase,
    plan,
  } = req.body;
  try {
    const rm_Data = await prisma.triase_ats_pasien_igd.create({
      data: {
        id_pasien_igd: id_pasien_igd,
        jalan_nafas: jalan_nafas,
        pernafasan_dewasa: pernafasan_dewasa,
        pernafasan_anak: pernafasan_anak,
        sirkulasi_dewasa: sirkulasi_dewasa,
        sirkulasi_anak: sirkulasi_anak,
        mental_status: mental_status,
        skor_nyeri: skor_nyeri,
        assesment_triase: assesment_triase,
        plan: plan,
      },
    });
    res.status(201).json(rm_Data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// update triase ats pasien igd
export const update_triase_ats_pasien_igd = async (req, res) => {
  const {
    id_pasien_igd,
    jalan_nafas,
    pernafasan_dewasa,
    pernafasan_anak,
    sirkulasi_dewasa,
    sirkulasi_anak,
    mental_status,
    skor_nyeri,
    assesment_triase,
    plan,
  } = req.body;

  try {
    const data = await prisma.triase_ats_pasien_igd.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        id_pasien_igd: id_pasien_igd,
        jalan_nafas: jalan_nafas,
        pernafasan_dewasa: pernafasan_dewasa,
        pernafasan_anak: pernafasan_anak,
        sirkulasi_dewasa: sirkulasi_dewasa,
        sirkulasi_anak: sirkulasi_anak,
        mental_status: mental_status,
        skor_nyeri: skor_nyeri,
        assesment_triase: assesment_triase,
        plan: plan,
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// update triase pemeriksaan penunjang pasien igd

// export const update_triase_pemeriksaan_penunjang_pasien_igd = async (req, res) => {
//  const {

//             id_pasien_igd,
//             diagnosa_tambahan,
//             diagnosa_sementara,
//             jenis_pemeriksaan,

//     } = req.body;

//     try {
//         const data = await prisma.triase_pemeriksaan_penunjang_pasien_igd.update({
//              where: {
//                 id: Number(req.params.id)
//             },
//             data: {
//                 id_pasien_igd:id_pasien_igd,
//                 jenis_pemeriksaan:jenis_pemeriksaan,
//                 diagnosa_sementara:diagnosa_sementara,
//                 diagnosa_tambahan:diagnosa_tambahan,
//             }
//         });
//         res.status(200).json(data);
//     } catch (error) {
//         res.status(400).json({msg: error.message});
//     }
// }

//   get triase planning pasien igd
export const triase_planning_pasien_igd_pasien_igd = async (req, res) => {
  try {
    const response = await prisma.triase_planning_pasien_igd.findMany({
      where: {
        id_pasien_igd: Number(req.params.id),
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

// tambah data triase planning pasien igd
export const add_triase_planning_pasien_igd = async (req, res) => {
  const { id_pasien_igd, planning } = req.body;
  try {
    const rm_Data = await prisma.triase_planning_pasien_igd.create({
      data: {
        id_pasien_igd: id_pasien_igd,
        planning: planning,
      },
    });
    res.status(201).json(rm_Data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// update triase planning pasien igd
export const update_triase_planning_pasien_igd = async (req, res) => {
  const { id_pasien_igd, planning } = req.body;

  try {
    const data = await prisma.triase_planning_pasien_igd.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        id_pasien_igd: id_pasien_igd,
        planning: planning,
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//   get triase permasalahan yang dikonsulkan pasien igd
export const triase_permasalahan_yang_dikonsulkan_pasien_igd = async (
  req,
  res
) => {
  try {
    const response =
      await prisma.triase_permasalahan_yang_dikonsulkan_pasien_igd.findMany({
        where: {
          id_pasien_igd: Number(req.params.id),
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

// tambah data triase permasalahan yang dikonsulkan pasien igd
export const add_triase_permasalahan_yang_dikonsulkan_pasien_igd = async (
  req,
  res
) => {
  const { id_pasien_igd, permasalahan_yang_dikonsulkan } = req.body;
  try {
    const rm_Data =
      await prisma.triase_permasalahan_yang_dikonsulkan_pasien_igd.create({
        data: {
          id_pasien_igd: id_pasien_igd,
          permasalahan_yang_dikonsulkan: permasalahan_yang_dikonsulkan,
        },
      });
    res.status(201).json(rm_Data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// update triase permasalahan yang dikonsulkan pasien igd
export const update_triase_permasalahan_yang_dikonsulkan_pasien_igd = async (
  req,
  res
) => {
  const { id_pasien_igd, permasalahan_yang_dikonsulkan } = req.body;

  try {
    const data =
      await prisma.triase_permasalahan_yang_dikonsulkan_pasien_igd.update({
        where: {
          id: Number(req.params.id),
        },
        data: {
          id_pasien_igd: id_pasien_igd,
          permasalahan_yang_dikonsulkan: permasalahan_yang_dikonsulkan,
        },
      });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//   get triase kondisi terkahir
export const triase_kondisi_terakhir_pasien_igd = async (req, res) => {
  try {
    const response = await prisma.triase_kondisi_terakhir_pasien_igd.findMany({
      where: {
        id_pasien_igd: Number(req.params.id),
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 1,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

// tambah data triase pasien igd
export const add_triase_kondisi_terakhir_pasien_igd = async (req, res) => {
  const {
    id_pasien_igd,
    keadaan_umum,
    kesadaran,
    tekanan_darah,
    frekuensi_nadi,
    frekuensi_nafas,
    temperature,
    dokter_penanggung_jawab,
  } = req.body;
  try {
    const rm_Data = await prisma.triase_kondisi_terakhir_pasien_igd.create({
      data: {
        id_pasien_igd: id_pasien_igd,
        keadaan_umum: keadaan_umum,
        kesadaran: kesadaran,
        tekanan_darah: tekanan_darah,
        frekuensi_nadi: frekuensi_nadi,
        frekuensi_nafas: frekuensi_nafas,
        temperature: temperature,
        dokter_penanggung_jawab: dokter_penanggung_jawab,
      },
    });
    res.status(201).json(rm_Data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const update_triase_kondisi_terakhir_pasien_igd = async (req, res) => {
  const {
    id_pasien_igd,
    keadaan_umum,
    kesadaran,
    tekanan_darah,
    frekuensi_nadi,
    frekuensi_nafas,
    temperature,
    dokter_penanggung_jawab,
  } = req.body;

  try {
    const data = await prisma.triase_kondisi_terakhir_pasien_igd.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        id_pasien_igd: id_pasien_igd,
        keadaan_umum: keadaan_umum,
        kesadaran: kesadaran,
        tekanan_darah: tekanan_darah,
        frekuensi_nadi: frekuensi_nadi,
        frekuensi_nafas: frekuensi_nafas,
        temperature: temperature,
        dokter_penanggung_jawab: dokter_penanggung_jawab,
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
