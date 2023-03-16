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
    createListGolonganDarah

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
    pasien_by_id
} from "../controller/igd/pendaftaran_igd.js";



const router = express.Router();

// pendaftaran pasien baru
router.get('/rm', getData);
router.get('/search', searchData);
router.get('/rm/:id', getDataById);
router.post('/rm', createData);
router.patch('/rm/:id', updateData);
router.delete('/rm/:id', deleteData);

// igd
router.get('/igd/pasien', search_data_pasien);
router.get('/igd/pasien/:id', pasien_by_id);
router.post('/igd/pasien/register', pendaftaran_igd);
router.get('/igd/pasien/data', data_pasien_igd);
router.get('/igd/pasien/data/:id', data_pasien_igd_by_id);
router.get('/igd/pasien/tindakan/:id', tindakan_by_id);
router.post('/igd/pasien/tindakan', create_tindakan_pasien_igd_by_id);
router.post('/igd/tindakan/list', create_list_tindakan_igd);
router.delete('/igd/pasien/tindakan/:id', hapus_tindakan_pasien_igd);
router.delete('/igd/tindakan/list/:id', hapus_list_tindakan_igd);

// list nama pekerjaan
router.get('/pekerjaan', listPekerjaan);
router.post('/pekerjaan', createPekerjaan);

// list agama
router.get('/agama', listAgama);
router.post('/agama', createListAgama);

// list status kawin
router.get('/statuskawin', listStatusKawin);
router.post('/statuskawin', createListStatusKawin);

// list golongan darah
router.get('/golongandarah', listGolonganDarah);
router.post('/golongandarah', createListGolonganDarah);

// list pendidikan
router.get('/pendidikan', listPendidikan);
router.post('/pendidikan', createListPendidikan);



export default router;