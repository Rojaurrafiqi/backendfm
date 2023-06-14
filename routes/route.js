import express from "express";
import {
  getData,
  getDataById,
  createData,
  updateData,
  deleteData,
  searchData,
  listPekerjaan,
  createPekerjaan,
  listAgama,
  createListAgama,
  listStatusKawin,
  createListStatusKawin,
  listPendidikan,
  createListPendidikan,
  listGolonganDarah,
  createListGolonganDarah,
} from "../controller/rekam_medis_pasien_controller.js";

import {
  search_data_pasien,
  pendaftaran_igd,
  data_pasien_igd,
  data_pasien_igd_by_id,
  tindakan_by_id,
  create_tindakan_pasien_igd_by_id,
  create_list_tindakan_igd,
  hapus_tindakan_pasien_igd,
  hapus_list_tindakan_igd,
  semua_pasien_igd,
  list_pasien_igd_penanganan,
  pasien_by_id,
  pasien_igd_by_id,
  pencarian_pasien,
  deleteDataIgd,
  statusPasienIgd,
} from "../controller/igd/pendaftaran_igd.js";

import {
  triase_pasien_igd,
  add_triase_pasien_igd,
  Update_triase_pasien_igd,
  triase_tanda_vital_pasien_igd,
  add_triase_tanda_vital_pasien_igd,
  update_triase_tanda_vital_pasien_igd,
  triase_anamnesa_pasien_igd,
  add_triase_anamnesa_pasien_igd,
  update_triase_anamnesa_pasien_igd,
  triase_pemeriksaan_fisik_pasien_igd,
  add_triase_pemeriksaan_fisik_pasien_igd,
  update_triase_pemeriksaan_fisik_pasien_igd,
  triase_pemeriksaan_penunjang_pasien_igd,
  add_triase_pemeriksaan_penunjang_pasien_igd,
  update_triase_pemeriksaan_penunjang_pasien_igd,
  triase_ats_pasien_igd,
  add_triase_ats_pasien_igd,
  update_triase_ats_pasien_igd,
  triase_planning_pasien_igd_pasien_igd,
  add_triase_planning_pasien_igd,
  update_triase_planning_pasien_igd,
  triase_permasalahan_yang_dikonsulkan_pasien_igd,
  add_triase_permasalahan_yang_dikonsulkan_pasien_igd,
  update_triase_permasalahan_yang_dikonsulkan_pasien_igd,
  triase_kondisi_terakhir_pasien_igd,
  add_triase_kondisi_terakhir_pasien_igd,
  update_triase_kondisi_terakhir_pasien_igd,
} from "../controller/igd/triase.js";

import {
  show_asesmen_awal_pasien_igd,
  add_asesmen_awal_pasien_igd,
  update_asesmen_awal_pasien_igd,
} from "../controller/igd/asesmen_awal.js";

import {
  delete_form_default_igd,
  form_default_igd,
  form_default_post,
} from "../controller/igd/form_default_igd.js";
import {
  delete_form_default_ralan,
  form_default_post_ralan,
  form_default_ralan,
} from "../controller/ralan/form_default_ralan.js";
import {
  delete_form_default_ranap,
  form_default_post_ranap,
  form_default_ranap,
} from "../controller/ranap/form_default_ranap.js";
import {
  getRiwayatIgdPasien,
  getRiwayatRekamMedisById,
} from "../controller/RekamMedis/Igd/riwayatIgdPasien.js";
import {
  pendaftaran_ranap,
  getAllPasienRanap,
  deletePasienRanap,
  getPasienRanapById,
  kamarAvailable,
  kamarStatus,
} from "../controller/ranap/pasien_ranap.js";
import {
  deleteDataKamar,
  getDataKamar,
  postDataKamar,
} from "../controller/ranap/kamar.js";
import {
  deleteTipeKamar,
  getTipeKamar,
  postTipeKamar,
} from "../controller/ranap/tipe_kamar.js";
import {
  updateDataObat,
  getDataObat,
  postDataObat,
  deleteDataObat,
  getDataObatById,
  getNamaObat,
} from "../controller/farmasi/obat.js";
import {
  deletePenjualanObat,
  getPenjualanObat,
  postPenjualanObat,
  updatePenjualanObat,
} from "../controller/farmasi/penjualan.js";
import {
  deleteStokObat,
  getNamaObatByStokObat,
  getStokObat,
  postStokObat,
  updateStokObat,
} from "../controller/farmasi/stok_obat.js";
import {
  deleteResepObat,
  getResepObat,
  getResepObatById,
  postResepObat,
  updateResepObat,
} from "../controller/farmasi/resep.js";
import {
  deleteResepUmum,
  getResepUmum,
  postResepUmum,
  updateResepUmum,
} from "../controller/farmasi/resep_umum.js";
import {
  deleteUser,
  getAllUser,
  getJabatan,
  getUser,
  getUserById,
  login,
  logout,
  register,
} from "../controller/users/users.js";

import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controller/token/RefreshToken.js";
import {
  deletePasienRalan,
  getAllPasienRalan,
  getPasienRalanById,
  pendaftaran_ralan,
} from "../controller/ralan/pasien_ralan.js";
import {
  getDetailUserDokter,
  postDetailUserDokter,
} from "../controller/users/detail/detail_users.js";
import {
  deleteDataPoliklinik,
  getDataPoliklinik,
  postDataPoliklinik,
} from "../controller/ralan/poliklinik/data_poliklinik.js";
import {
  deleteDataJadwalPoliklinik,
  getDataJadwalPoliklinik,
  getDataNamaHari,
  getJadwalPoli,
  getNamaDokter,
  postDataJadwalPoliklinik,
} from "../controller/ralan/poliklinik/jadwal_poliklinik.js";
import { getPoliById } from "../controller/ralan/poliklinik/api_jadwal_poli.js";
import { getTipePembayaran } from "../controller/kasir/jenis_pembayaran.js";
import { getTipePasien } from "../controller/JenisPasien/jenis_pasien.js";
import {
  getDataTarifTindakan,
  getDataTarifTindakanById,
} from "../controller/form/tindakan/MasterTarif/tarif_tindakan.js";
import {
  getDataDiagnosaIcd,
  getDataDiagnosaIcdById,
} from "../controller/form/diagnosa/diagnosa_icd.js";
import {
  deleteDiagnosaPasien,
  getDiagnosaPasien,
  postDataDiagnosaPasien,
} from "../controller/form/diagnosa/diagnosa_pasien.js";
import {
  deleteTindakanPasienRalan,
  getDataTindakanPasienRalanById,
  getTindakanPasienRalan,
  postDataTindakanPasienRalan,
} from "../controller/form/tindakan/tindakan_pasien_ralan.js";
import { getDataListTagihanPasien } from "../controller/kasir/kasir.js";

const router = express.Router();

// auth
// router.get("/users", verifyToken, getUser);
router.get("/users", getUser);
router.get("/users/all", getAllUser);
router.get("/token", refreshToken);
router.post("/users", register);
router.get("/users/jabatan", getJabatan); //dipakai untuk select jabatan pada form register user
router.post("/login", login);
router.patch("/logout/:id", logout);
router.get("/users/:id", getUserById);
router.delete("/users/:id", deleteUser);
router.get("/user/detail/dokter/:id", getDetailUserDokter); // parse pakai id user bukan id dokter
router.post("/user/detail/dokter", postDetailUserDokter);

//poliklinik
router.get("/ralan/poliklinik", getDataPoliklinik);
router.delete("/ralan/poliklinik/:id", deleteDataPoliklinik);
router.post("/ralan/poliklinik", postDataPoliklinik);

// jadwal poliklinik
router.get("/ralan/poliklinik/jadwal", getDataJadwalPoliklinik);
router.get("/hari/nama", getDataNamaHari);
router.get("/ralan/poliklinik/dokter/nama", getNamaDokter);
router.delete("/ralan/poliklinik/jadwal/:id", deleteDataJadwalPoliklinik);
router.post("/ralan/poliklinik/jadwal", postDataJadwalPoliklinik);

// api dynamic dropdown jadwal poliklinik
router.get("/ralan/poliklinik/jadwal/:id", getPoliById);

// pendaftaran pasien baru
router.get("/rm", getData);
router.get("/search", searchData);
router.get("/rm/:id", getDataById);
router.post("/rm", createData);
router.patch("/rm/:id", updateData);
router.delete("/rm/:id", deleteData);

// igd
router.get("/igd/pasien/all", semua_pasien_igd);
router.get("/igd/pasien/list/penanganan", list_pasien_igd_penanganan);
router.get("/igd/pasien/search/:id", pencarian_pasien);
router.get("/igd/pasien/:id", pasien_igd_by_id);
router.get("/igd/pasien", search_data_pasien);
router.post("/igd/pasien/register", pendaftaran_igd);
router.get("/igd/pasien/data/all/:id", data_pasien_igd);
router.get("/igd/pasien/data/:id", data_pasien_igd_by_id);
router.get("/igd/pasien/tindakan/:id", tindakan_by_id);
router.post("/igd/pasien/tindakan", create_tindakan_pasien_igd_by_id);
router.post("/igd/tindakan/list", create_list_tindakan_igd);
router.delete("/igd/pasien/tindakan/:id", hapus_tindakan_pasien_igd);
router.delete("/igd/tindakan/list/:id", hapus_list_tindakan_igd);
router.delete("/igd/pasien/:id", deleteDataIgd);
router.patch("/igd/pasien/status/:id", statusPasienIgd);

// igd triase keluhan utama
router.get("/igd/pasien/penanganan/triase/:id", triase_pasien_igd);
router.post("/igd/pasien/penanganan/triase", add_triase_pasien_igd);
router.patch("/igd/pasien/penanganan/triase/:id", Update_triase_pasien_igd);

// igd triase tanda vital pasien
router.get(
  "/igd/pasien/penanganan/triase/tandavital/:id",
  triase_tanda_vital_pasien_igd
);
router.post(
  "/igd/pasien/penanganan/triase/tandavital/",
  add_triase_tanda_vital_pasien_igd
);
router.patch(
  "/igd/pasien/penanganan/triase/tandavital/:id",
  update_triase_tanda_vital_pasien_igd
);

// igd triase anamnesa pasien
router.get(
  "/igd/pasien/penanganan/triase/anamnesa/:id",
  triase_anamnesa_pasien_igd
);
router.post(
  "/igd/pasien/penanganan/triase/anamnesa/",
  add_triase_anamnesa_pasien_igd
);
router.patch(
  "/igd/pasien/penanganan/triase/anamnesa/:id",
  update_triase_anamnesa_pasien_igd
);

// igd triase pemeriksaan fisik pasien
router.get(
  "/igd/pasien/penanganan/triase/pemeriksaanfisik/:id",
  triase_pemeriksaan_fisik_pasien_igd
);
router.post(
  "/igd/pasien/penanganan/triase/pemeriksaanfisik/",
  add_triase_pemeriksaan_fisik_pasien_igd
);
router.patch(
  "/igd/pasien/penanganan/triase/pemeriksaanfisik/:id",
  update_triase_pemeriksaan_fisik_pasien_igd
);

// igd triase pemeriksaan penunjang pasien
router.get(
  "/igd/pasien/penanganan/triase/pemeriksaanpenunjang/:id",
  triase_pemeriksaan_penunjang_pasien_igd
);
router.post(
  "/igd/pasien/penanganan/triase/pemeriksaanpenunjang/",
  add_triase_pemeriksaan_penunjang_pasien_igd
);
router.patch(
  "/igd/pasien/penanganan/triase/pemeriksaanpenunjang/:id",
  update_triase_pemeriksaan_penunjang_pasien_igd
);

// igd triase planning pasien
router.get(
  "/igd/pasien/penanganan/triase/planning/:id",
  triase_planning_pasien_igd_pasien_igd
);
router.post(
  "/igd/pasien/penanganan/triase/planning/",
  add_triase_planning_pasien_igd
);
router.patch(
  "/igd/pasien/penanganan/triase/planning/:id",
  update_triase_planning_pasien_igd
);

// igd triase hasil konsul permasalahan pasien
router.get(
  "/igd/pasien/penanganan/triase/permasalahan/:id",
  triase_permasalahan_yang_dikonsulkan_pasien_igd
);
router.post(
  "/igd/pasien/penanganan/triase/permasalahan/",
  add_triase_permasalahan_yang_dikonsulkan_pasien_igd
);
router.patch(
  "/igd/pasien/penanganan/triase/permasalahan/:id",
  update_triase_permasalahan_yang_dikonsulkan_pasien_igd
);

// igd triase ATS pasien
router.get("/igd/pasien/penanganan/triase/ats/:id", triase_ats_pasien_igd);
router.post("/igd/pasien/penanganan/triase/ats/", add_triase_ats_pasien_igd);
router.patch(
  "/igd/pasien/penanganan/triase/ats/:id",
  update_triase_ats_pasien_igd
);

// igd triase kondisi terakhir pasien IGD
router.get(
  "/igd/pasien/penanganan/triase/kondisiterakhir/:id",
  triase_kondisi_terakhir_pasien_igd
);
router.post(
  "/igd/pasien/penanganan/triase/kondisiterakhir/",
  add_triase_kondisi_terakhir_pasien_igd
);
router.patch(
  "/igd/pasien/penanganan/triase/kondisiterakhir/:id",
  update_triase_kondisi_terakhir_pasien_igd
);

// asesmen awal pasien IGD
router.get(
  "/igd/pasien/penanganan/asesmenawal/:id",
  show_asesmen_awal_pasien_igd
);
router.post("/igd/pasien/penanganan/asesmenawal/", add_asesmen_awal_pasien_igd);
router.patch(
  "/igd/pasien/penanganan/asesmenawal/:id",
  update_asesmen_awal_pasien_igd
);

// list nama pekerjaan
router.get("/pekerjaan", listPekerjaan);
router.post("/pekerjaan", createPekerjaan);

// list agama
router.get("/agama", listAgama);
router.post("/agama", createListAgama);

// list status kawin
router.get("/statuskawin", listStatusKawin);
router.post("/statuskawin", createListStatusKawin);

// list golongan darah
router.get("/golongandarah", listGolonganDarah);
router.post("/golongandarah", createListGolonganDarah);

// list pendidikan
router.get("/pendidikan", listPendidikan);
router.post("/pendidikan", createListPendidikan);

// form default pasien igd
router.get("/form/default/igd", form_default_igd);
router.patch("/form/default/igd", form_default_post);
router.delete("/form/default/igd/:id", delete_form_default_igd);

// form default ralan
router.get("/form/default/ralan", form_default_ralan);
router.patch("/form/default/ralan", form_default_post_ralan);
router.delete("/form/default/ralan/:id", delete_form_default_ralan);

// form default ranap
router.get("/form/default/ranap", form_default_ranap);
router.patch("/form/default/ranap", form_default_post_ranap);
router.delete("/form/default/ranap/:id", delete_form_default_ranap);

// rekam medis > riwayat igd pasien
router.get("/rm/igd/:id", getRiwayatIgdPasien);

// ranap > register pasien
router.post("/ranap/pasien/register", pendaftaran_ranap);

//ranap > register > kamar available
router.get("/ranap/pasien/register/kamar/available", kamarAvailable);

//ranap > register > kamar update menjadi occupied / terisi
router.patch("/ranap/kamar/status/:id", kamarStatus);

//ranap > get all pasien
router.get("/ranap/pasien/all", getAllPasienRanap);

//ranap > delete pasien ranap
router.delete("/ranap/pasien/:id", deletePasienRanap);

//ranap > get pasien ranap by id
router.get("/ranap/pasien/:id", getPasienRanapById);

//ranap > kamar > get all data kamar
router.get("/ranap/kamar/", getDataKamar);

//ranap > kamar > get all data kamar
router.post("/ranap/kamar/", postDataKamar);

//ranap > kamar > delete data kamar
router.delete("/ranap/kamar/:id", deleteDataKamar);

//ranap > tipe kamar > get all data tipe kamar
router.get("/ranap/kamar/tipe", getTipeKamar);

//ranap > tipe kamar > delete tipe kamar
router.delete("/ranap/kamar/tipe/:id", deleteTipeKamar);

// ranap > tipe kamar > post data
router.post("/ranap/kamar/tipe", postTipeKamar);

// ------farmasi -------

// farmasi > data obat
router.get("/farmasi/obat", getDataObat);

//farmasi > memunculkan nama obat saja untuk dipakai di select pemilihan nama obat
router.get("/farmasi/obat/nama", getNamaObat);

//farmasi > memunculkan pilihan nama obat hanya yang stok tersedia saja
router.get("/farmasi/obat/nama/stok", getNamaObatByStokObat);

//farmasi > post data obat
router.post("/farmasi/obat", postDataObat);

//farmasi > update data obat
router.patch("/farmasi/obat/:id", updateDataObat);

//farmasi > get data obat by id
router.get("/farmasi/obat/:id", getDataObatById);

//farmasi > delete data obat
router.delete("/farmasi/obat/:id", deleteDataObat);

// farmasi > penjualan obat
router.get("/farmasi/penjualan/obat", getPenjualanObat);

// farmasi > post penjualan obat
router.post("/farmasi/obat/penjualan/", postPenjualanObat);

// farmasi > edit penjualan obat
router.patch("/farmasi/obat/penjualan/:id", updatePenjualanObat);

// farmasi > delete penjualan obat
router.delete("/farmasi/obat/penjualan/:id", deletePenjualanObat);

// farmasi > stok obat
router.get("/farmasi/stok/obat", getStokObat);

// farmasi > post stok obat
router.post("/farmasi/stok/obat", postStokObat);

// farmasi > edit stok obat
router.patch("/farmasi/stok/obat/:id", updateStokObat);

// farmasi > delete stok obat
router.delete("/farmasi/stok/obat/:id", deleteStokObat);

// farmasi > resep
router.get("/farmasi/resep/obat", getResepObat);

// farmasi > resep obat by id
router.get("/farmasi/resep/obat/:id", getResepObatById);

// farmasi > post resep
router.post("/farmasi/obat/resep", postResepObat);

// farmasi > edit resep
router.patch("/farmasi/obat/resep/:id", updateResepObat);

// farmasi > delete resep
router.delete("/farmasi/obat/resep/:id", deleteResepObat);

// farmasi > resep umum
router.get("/farmasi/obat/resep/umum", getResepUmum);

// farmasi > post resep umum
router.post("/farmasi/obat/resep/umum", postResepUmum);

// farmasi > edit resep umum
router.patch("/farmasi/obat/resep/umum/:id", updateResepUmum);

// farmasi > delete resep umum
router.delete("/farmasi/obat/resep/umum/:id", deleteResepUmum);

// ------rawat jalan-----

// ralan > pendaftaran
router.post("/ralan/pasien/daftar", pendaftaran_ralan);

//ralan > get all data
router.get("/ralan/pasien/all", getAllPasienRalan);

// ralan > get data by id
router.get("/ralan/pasien/:id", getPasienRalanById);

// ralan > delete data
router.delete("/ralan/pasien/:id", deletePasienRalan);

// kasir
router.get("/pembayaran", getTipePembayaran);
router.get("/kasir/tagihan", getDataListTagihanPasien);

//jenis pasien like : bpjs, umum, asuransi
router.get("/pasien/tipe", getTipePasien);

// tes jadwal poli
router.get("/jadwal/poli", getJadwalPoli);

// get rekam medis pasien lama by id
router.get("/pasien/rekammedis/lama/:id", getRiwayatRekamMedisById);

// master tarif tindakan
router.get("/master/tindakan/tarif", getDataTarifTindakan);
router.get("/master/tindakan/tarif/:id", getDataTarifTindakanById);

// master diagnosa icd
router.get("/master/diagnosa/icd", getDataDiagnosaIcd);
router.get("/master/diagnosa/icd/:id", getDataDiagnosaIcdById);

//diagnosa pasien ralan
router.get("/ralan/tangani/diagnosa", getDiagnosaPasien);
router.delete("/ralan/tangani/diagnosa/:id", deleteDiagnosaPasien);
router.post("/ralan/tangani/diagnosa", postDataDiagnosaPasien);

//tindakan pasien ralan
router.get("/ralan/tangani/tindakan", getTindakanPasienRalan);
router.get("/ralan/tangani/tindakan/:id", getDataTindakanPasienRalanById);
router.delete("/ralan/tangani/tindakan/:id", deleteTindakanPasienRalan);
router.post("/ralan/tangani/tindakan", postDataTindakanPasienRalan);

export default router;
