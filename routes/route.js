import express from "express";
import {
  getDataById,
  createData,
  updateData,
  deleteData,
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
  getAllPasien,
} from "../controller/RekamMedis/rekam_medis_pasien.js";

import {
  delete_form_default_ralan,
  form_default_post_ralan,
  form_default_ralan,
} from "../controller/ralan/form_default_ralan.js";

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
  statusCheckoutPoli,
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
import {
  getDataListTagihanPasien,
  getTotalTagihanPasienRalan,
  postBill,
  postBillDetail,
  statusCheckoutKasir,
} from "../controller/kasir/kasir.js";
import {
  getDataStokBarangGudang,
  getDataStokBarangGudangById,
} from "../controller/gudang/stok_barang.js";
import {
  ceknoRTObatResepUmum,
  getDataObatGeneralPasienRalan,
  getDataObatPasienRalan,
  getDataObatPasienRalanById,
  postDataObatPasienRalan,
} from "../controller/form/obat/ObatPasienRalan.js";
import {
  deleteBarangPasienRalan,
  hitungTotalTransaksi,
  postPenjualanBarang,
} from "../controller/farmasi/penjualan_barang.js";
import {
  getDataAntrianResep,
  statusCheckoutFarmasi,
} from "../controller/farmasi/resep.js";
import { getDataGudang } from "../controller/gudang/gudang.js";
import {
  getDataPasienById,
  searchDataPasien,
} from "../controller/SearchPasien/search_pasien.js";

const router = express.Router();

// ------------auth------------//

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

// ------pendaftaran pasien baru ----------//
router.get("/pasien/data/all", getAllPasien);
router.get("/rm/:id", getDataById);
router.post("/rm", createData);
router.patch("/rm/:id", updateData);
router.delete("/rm/:id", deleteData);

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

// form default ralan
router.get("/form/default/ralan", form_default_ralan);
router.patch("/form/default/ralan", form_default_post_ralan);
router.delete("/form/default/ralan/:id", delete_form_default_ralan);

// ---------------farmasi -------------------//

// farmasi > penjualan barang
router.get(
  "/farmasi/barang/penjualan/totaltransaksi/:id",
  hitungTotalTransaksi
);

//farmasi > post penjualan barang
router.post("/farmasi/barang/penjualan/:id", postPenjualanBarang);

// ------rawat jalan------------//

// ralan > pendaftaran
router.post("/ralan/pasien/daftar", pendaftaran_ralan);

//ralan > get all data
router.get("/ralan/pasien/all", getAllPasienRalan);

// ralan > get data by id
router.get("/ralan/pasien/:id", getPasienRalanById);

// ralan > delete data
router.delete("/ralan/pasien/:id", deletePasienRalan);

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

// -------------SEARCH PASIEN-----------------//
router.get("/pasien/search", searchDataPasien);
router.get("/pasien/result/:id", getDataPasienById);

// -------------KASIR-----------------//

// kasir
router.get("/pembayaran", getTipePembayaran);
router.get("/pembayaran/totaltagihan/:id", getTotalTagihanPasienRalan);
router.get("/kasir/tagihan", getDataListTagihanPasien);

//jenis pasien like : bpjs, umum, asuransi
router.get("/pasien/tipe", getTipePasien);

// tes jadwal poli
router.get("/jadwal/poli", getJadwalPoli);

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

//stok barang
router.get("/gudang/barang/stok", getDataStokBarangGudang);
router.get("/gudang/barang", getDataGudang);
router.get("/gudang/barang/stok/:id", getDataStokBarangGudangById);
// router.delete("/ralan/tangani/tindakan/:id", deleteTindakanPasienRalan);
// router.post("/ralan/tangani/tindakan", postDataTindakanPasienRalan);

//obat pasien ralan
router.get("/ralan/tangani/obat", getDataObatPasienRalan);
router.post("/ralan/tangani/obat", postDataObatPasienRalan);
router.get("/ralan/tangani/obat/:id", getDataObatPasienRalanById);
router.delete("/ralan/tangani/obat/:id", deleteBarangPasienRalan);
router.get("/ralan/tangani/obat/general/:id", getDataObatGeneralPasienRalan);
//obat pasien ralan > pengecekan no urutan resep umum / general
router.get("/ralan/tangani/obat/cekurutan/:id", ceknoRTObatResepUmum);

//farmasi > resep obat
router.get("/farmasi/obat/resep/antrian", getDataAntrianResep);
router.patch("/farmasi/resep/selesai/:id", statusCheckoutFarmasi);

// pasien ralan checkout poli
router.patch("/ralan/tangani/checkout/:id", statusCheckoutPoli);
// pasien ralan checkout kasir
router.patch("/kasir/checkout/:id", statusCheckoutKasir);

//pembuatan bill penjualan
router.post("/kasir/bill", postBill);
router.post("/kasir/bill/detail", postBillDetail);

export default router;
