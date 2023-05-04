import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//   get asesmen awal pasien igd
export const show_asesmen_awal_pasien_igd = async (req, res) => {
  try {
    const response = await prisma.asesmen_awal_pasien_igd.findMany({
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
export const add_asesmen_awal_pasien_igd = async (req, res) => {
  const {
    id_pasien_igd,
    kegawatan_pernafasan,
    kehilangan_tonus_otot,
    nyeri,
    perlambatan_sirkulasi,
    faktor_pembangkit_gejala_fisik,
    respon_pasien_terhadap_gejala,
    pelayanan_spiritual,
    perlu_didoakan,
    bimbingan_rohani,
    pendampingan_rohani,
    nama_orang_yang_ingin_dihubungi,
    alamat_orang_yang_ingin_dihubungi,
    hubungan_dengan_pasien,
    no_telpon_orang_yang_ingin_dihubungi,
    rencana_perawatan_lanjutan,
    ligkungan_disiapkan,
    perawat_di_rumah,
    fasilitasi_rs_homecare,
    asesmen_informasi_reaksi_pasien,
    masalah_keperawatan_reaksi_pasien,
    asesmen_informasi_reaksi_keluarga,
    masalah_keperawatan_reaksi_keluarga,
    dukungan_pelayanan_bagi_pasien,
    kebutuhan_alternative,
    asesmen_informasi_faktor_resiko_keluarga_ditinggalkan,
    masalah_keperawatan_faktor_resiko_keluarga_ditinggalkan,
  } = req.body;
  try {
    const rm_Data = await prisma.asesmen_awal_pasien_igd.create({
      data: {
        id_pasien_igd: id_pasien_igd,
        kegawatan_pernafasan: kegawatan_pernafasan,
        kehilangan_tonus_otot: kehilangan_tonus_otot,
        nyeri: nyeri,
        perlambatan_sirkulasi: perlambatan_sirkulasi,
        faktor_pembangkit_gejala_fisik: faktor_pembangkit_gejala_fisik,
        respon_pasien_terhadap_gejala: respon_pasien_terhadap_gejala,
        pelayanan_spiritual: pelayanan_spiritual,
        perlu_didoakan: perlu_didoakan,
        bimbingan_rohani: bimbingan_rohani,
        pendampingan_rohani: pendampingan_rohani,
        nama_orang_yang_ingin_dihubungi: nama_orang_yang_ingin_dihubungi,
        alamat_orang_yang_ingin_dihubungi: alamat_orang_yang_ingin_dihubungi,
        hubungan_dengan_pasien: hubungan_dengan_pasien,
        no_telpon_orang_yang_ingin_dihubungi:
          no_telpon_orang_yang_ingin_dihubungi,
        rencana_perawatan_lanjutan: rencana_perawatan_lanjutan,
        ligkungan_disiapkan: ligkungan_disiapkan,
        perawat_di_rumah: perawat_di_rumah,
        fasilitasi_rs_homecare: fasilitasi_rs_homecare,
        asesmen_informasi_reaksi_pasien: asesmen_informasi_reaksi_pasien,
        masalah_keperawatan_reaksi_pasien: masalah_keperawatan_reaksi_pasien,
        asesmen_informasi_reaksi_keluarga: asesmen_informasi_reaksi_keluarga,
        masalah_keperawatan_reaksi_keluarga:
          masalah_keperawatan_reaksi_keluarga,
        dukungan_pelayanan_bagi_pasien: dukungan_pelayanan_bagi_pasien,
        kebutuhan_alternative: kebutuhan_alternative,
        asesmen_informasi_faktor_resiko_keluarga_ditinggalkan:
          asesmen_informasi_faktor_resiko_keluarga_ditinggalkan,
        masalah_keperawatan_faktor_resiko_keluarga_ditinggalkan:
          masalah_keperawatan_faktor_resiko_keluarga_ditinggalkan,
      },
    });
    res.status(201).json(rm_Data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// update triase ats pasien igd
export const update_asesmen_awal_pasien_igd = async (req, res) => {
  const {
    id_pasien_igd,
    kegawatan_pernafasan,
    kehilangan_tonus_otot,
    nyeri,
    perlambatan_sirkulasi,
    faktor_pembangkit_gejala_fisik,
    respon_pasien_terhadap_gejala,
    pelayanan_spiritual,
    perlu_didoakan,
    bimbingan_rohani,
    pendampingan_rohani,
    nama_orang_yang_ingin_dihubungi,
    alamat_orang_yang_ingin_dihubungi,
    hubungan_dengan_pasien,
    no_telpon_orang_yang_ingin_dihubungi,
    rencana_perawatan_lanjutan,
    ligkungan_disiapkan,
    perawat_di_rumah,
    fasilitasi_rs_homecare,
    asesmen_informasi_reaksi_pasien,
    masalah_keperawatan_reaksi_pasien,
    asesmen_informasi_reaksi_keluarga,
    masalah_keperawatan_reaksi_keluarga,
    dukungan_pelayanan_bagi_pasien,
    kebutuhan_alternative,
    asesmen_informasi_faktor_resiko_keluarga_ditinggalkan,
    masalah_keperawatan_faktor_resiko_keluarga_ditinggalkan,
  } = req.body;

  try {
    const data = await prisma.asesmen_awal_pasien_igd.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        id_pasien_igd: id_pasien_igd,
        kegawatan_pernafasan: kegawatan_pernafasan,
        kehilangan_tonus_otot: kehilangan_tonus_otot,
        nyeri: nyeri,
        perlambatan_sirkulasi: perlambatan_sirkulasi,
        faktor_pembangkit_gejala_fisik: faktor_pembangkit_gejala_fisik,
        respon_pasien_terhadap_gejala: respon_pasien_terhadap_gejala,
        pelayanan_spiritual: pelayanan_spiritual,
        perlu_didoakan: perlu_didoakan,
        bimbingan_rohani: bimbingan_rohani,
        pendampingan_rohani: pendampingan_rohani,
        nama_orang_yang_ingin_dihubungi: nama_orang_yang_ingin_dihubungi,
        alamat_orang_yang_ingin_dihubungi: alamat_orang_yang_ingin_dihubungi,
        hubungan_dengan_pasien: hubungan_dengan_pasien,
        no_telpon_orang_yang_ingin_dihubungi:
          no_telpon_orang_yang_ingin_dihubungi,
        rencana_perawatan_lanjutan: rencana_perawatan_lanjutan,
        ligkungan_disiapkan: ligkungan_disiapkan,
        perawat_di_rumah: perawat_di_rumah,
        fasilitasi_rs_homecare: fasilitasi_rs_homecare,
        asesmen_informasi_reaksi_pasien: asesmen_informasi_reaksi_pasien,
        masalah_keperawatan_reaksi_pasien: masalah_keperawatan_reaksi_pasien,
        asesmen_informasi_reaksi_keluarga: asesmen_informasi_reaksi_keluarga,
        masalah_keperawatan_reaksi_keluarga:
          masalah_keperawatan_reaksi_keluarga,
        dukungan_pelayanan_bagi_pasien: dukungan_pelayanan_bagi_pasien,
        kebutuhan_alternative: kebutuhan_alternative,
        asesmen_informasi_faktor_resiko_keluarga_ditinggalkan:
          asesmen_informasi_faktor_resiko_keluarga_ditinggalkan,
        masalah_keperawatan_faktor_resiko_keluarga_ditinggalkan:
          masalah_keperawatan_faktor_resiko_keluarga_ditinggalkan,
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
