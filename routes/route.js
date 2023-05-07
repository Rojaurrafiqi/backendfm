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
  checkoutIgd,
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

const router = express.Router();

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
router.patch("/igd/pasien/checkout/:id", checkoutIgd);

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

export default router;
