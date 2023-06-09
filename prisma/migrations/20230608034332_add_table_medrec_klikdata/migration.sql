-- CreateTable
CREATE TABLE `tbl_mst_ruangan` (
    `id_ruangan` INTEGER NOT NULL AUTO_INCREMENT,
    `no_ruangan` CHAR(2) NULL,
    `kode_bpjs` VARCHAR(10) NULL,
    `grup_caller` INTEGER NULL DEFAULT 1,
    `nama_ruangan` VARCHAR(80) NULL,
    `sts_poli_eksekutif` INTEGER NULL DEFAULT 0,
    `id_kelas_rawatan` INTEGER NULL DEFAULT 0,
    `id_grup_rawatan` INTEGER NULL DEFAULT 0,
    `id_tarif` INTEGER NULL,
    `ket_ruangan` VARCHAR(191) NULL DEFAULT '-',
    `kode_tt` INTEGER NULL,
    `id_grup_ruangan` INTEGER NULL DEFAULT 0,
    `isdefault` INTEGER NULL DEFAULT 0,
    `isactive` INTEGER NULL DEFAULT 1,
    `isapotik` INTEGER NULL DEFAULT 0,
    `sts_sa` INTEGER NULL DEFAULT 0,
    `date_closing_sa` DATETIME NULL,
    `user_closing_sa` VARCHAR(30) NULL,
    `sts_poli` INTEGER NULL DEFAULT 0,
    `dicadangkan` INTEGER NULL DEFAULT 0,

    PRIMARY KEY (`id_ruangan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_mst_ruangan_grup` (
    `id_grup_ruangan` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_grup_ruangan` VARCHAR(50) NULL,
    `id_jenis_ruangan` INTEGER NULL,
    `isdefault` INTEGER NULL DEFAULT 0,

    PRIMARY KEY (`id_grup_ruangan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_medrec_lama` (
    `no_register` INTEGER NOT NULL AUTO_INCREMENT,
    `tgl_masuk` VARCHAR(191) NULL,
    `sts_pencatatan` VARCHAR(191) NULL,
    `id_pasien` VARCHAR(191) NULL,
    `umur_thn` VARCHAR(191) NULL,
    `umur_bln` VARCHAR(191) NULL,
    `umur_hri` VARCHAR(191) NULL,
    `sts_kunjungan_pasien` VARCHAR(191) NULL,
    `id_jenis_rawatan` VARCHAR(191) NULL,
    `is_ugd` VARCHAR(191) NULL,
    `lakalantas` VARCHAR(191) NULL,
    `id_grup_dokter` VARCHAR(191) NULL,
    `id_caradaftar` VARCHAR(191) NULL,
    `id_sumber_pasien` VARCHAR(191) NULL,
    `rujukan_no` VARCHAR(191) NULL,
    `sep_number` VARCHAR(191) NULL,
    `sep_tanggal` VARCHAR(191) NULL,
    `id_asuransi_dipakai` VARCHAR(191) NULL,
    `id_kelas_rawatan_diambil` VARCHAR(191) NULL,
    `id_ruangan` VARCHAR(191) NULL,
    `id_dokter` VARCHAR(191) NULL,
    `id_kesadaran` VARCHAR(191) NULL,
    `darah_sistol` VARCHAR(191) NULL,
    `darah_diastol` VARCHAR(191) NULL,
    `denyut_nadi` VARCHAR(191) NULL,
    `pernafasan` VARCHAR(191) NULL,
    `badan_suhu` VARCHAR(191) NULL,
    `spo2` VARCHAR(191) NULL,
    `alergi_obat` VARCHAR(191) NULL,
    `badan_berat` VARCHAR(191) NULL,
    `badan_tinggi` VARCHAR(191) NULL,
    `anamnese` VARCHAR(191) NULL,
    `pemeriksaan_fisik` VARCHAR(191) NULL,
    `skrining_gizi` VARCHAR(191) NULL,
    `skrining_gizi_ket` VARCHAR(191) NULL,
    `skrining_jatuh` VARCHAR(191) NULL,
    `skrining_jatuh_ket` VARCHAR(191) NULL,
    `skrining_nyeri` VARCHAR(191) NULL,
    `skrining_nyeri_ket` VARCHAR(191) NULL,
    `skala_nyeri` VARCHAR(191) NULL,
    `lokasi_nyeri` VARCHAR(191) NULL,
    `sts_psikologi` VARCHAR(191) NULL,
    `sts_psikologi_ket` VARCHAR(191) NULL,
    `sts_sosial` VARCHAR(191) NULL,
    `sts_sosial_ket` VARCHAR(191) NULL,
    `sts_tempat_tinggal` VARCHAR(191) NULL,
    `sts_tempat_tinggal_ket` VARCHAR(191) NULL,
    `kerabat_nama` VARCHAR(191) NULL,
    `kerabat_hubungan` VARCHAR(191) NULL,
    `kerabat_hp` VARCHAR(191) NULL,
    `kegiatan_agama_pasien` VARCHAR(191) NULL,
    `kegiatan_spiritual_dibutuhkan` VARCHAR(191) NULL,
    `sts_kronis` VARCHAR(191) NULL,
    `catatan_pemeriksaan` VARCHAR(191) NULL,
    `sts_pp_lab` VARCHAR(191) NULL,
    `sts_pp_radiologi` VARCHAR(191) NULL,
    `sts_resep` VARCHAR(191) NULL,
    `sts_edukasi` VARCHAR(191) NULL,
    `sts_hambatan_edukasi` VARCHAR(191) NULL,
    `sts_hambatan_edukasi_ket` VARCHAR(191) NULL,
    `pendidikan_pasien` VARCHAR(191) NULL,
    `catatan_edukasi_dokter` VARCHAR(191) NULL,
    `sts_kasus` VARCHAR(191) NULL,
    `id_carakeluar` VARCHAR(191) NULL,
    `tgl_keluar` VARCHAR(191) NULL,
    `no_surat_meninggal` VARCHAR(191) NULL,
    `tgl_meninggal` VARCHAR(191) NULL,
    `no_lp_manual` VARCHAR(191) NULL,
    `ket_carakeluar` VARCHAR(191) NULL,
    `sts_konsultasi` VARCHAR(191) NULL,
    `id_kondisi` VARCHAR(191) NULL,
    `sts_migrasi` VARCHAR(191) NULL,
    `rencana_tindak_lanjut` VARCHAR(191) NULL,
    `id_rujukan` VARCHAR(191) NULL,
    `catatan_rujukan` VARCHAR(191) NULL,
    `sts_verifikasi` VARCHAR(191) NULL,
    `catatan_verifikasi` VARCHAR(191) NULL,
    `sts_klaim` VARCHAR(191) NULL,
    `user_created` VARCHAR(191) NULL,
    `date_created` VARCHAR(191) NULL,
    `user_modified` VARCHAR(191) NULL,
    `date_modified` VARCHAR(191) NULL,
    `id_ub` VARCHAR(191) NULL,

    PRIMARY KEY (`no_register`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
