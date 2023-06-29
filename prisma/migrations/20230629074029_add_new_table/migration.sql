-- CreateTable
CREATE TABLE `pemeriksaan_fisik_ralan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `no_registrasi` VARCHAR(191) NULL,
    `id_pasien` INTEGER NULL,
    `kesadaran` VARCHAR(191) NULL,
    `tekanan_darah` VARCHAR(191) NULL,
    `nadi` VARCHAR(191) NULL,
    `pernafasan` VARCHAR(191) NULL,
    `suhu` VARCHAR(191) NULL,
    `tb` VARCHAR(191) NULL,
    `bb` VARCHAR(191) NULL,
    `images` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `form_pengkajian_awal_medis_ralan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `no_registrasi` VARCHAR(191) NULL,
    `id_pasien` INTEGER NULL,
    `tgl_periksa` VARCHAR(191) NULL,
    `jam_periksa` VARCHAR(191) NULL,
    `wawancara` VARCHAR(191) NULL,
    `isAlergi` VARCHAR(191) NULL,
    `alergi_obat` VARCHAR(191) NULL,
    `alergi_makanan` VARCHAR(191) NULL,
    `alergi_udara` VARCHAR(191) NULL,
    `alergi_lainya` VARCHAR(191) NULL,
    `isKawin` VARCHAR(191) NULL,
    `isImunisasi` VARCHAR(191) NULL,
    `tumbuh_kembang` VARCHAR(191) NULL,
    `riwayat_penyakit_keluarga` VARCHAR(191) NULL,
    `riwayat_penyakit_terdahulu` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
