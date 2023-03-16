-- CreateTable
CREATE TABLE `rekam_medis_pasien` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `no_rm` INTEGER NULL,
    `kitas` VARCHAR(191) NULL,
    `no_kitas` VARCHAR(191) NULL,
    `nama_lengkap` VARCHAR(191) NULL,
    `tempat_lahir` VARCHAR(191) NULL,
    `tanggal_lahir` VARCHAR(191) NULL,
    `kelamin` VARCHAR(191) NULL,
    `kontak_pasien` VARCHAR(191) NULL,
    `golongan_darah` VARCHAR(191) NULL,
    `agama` VARCHAR(191) NULL,
    `status_kawin` VARCHAR(191) NULL,
    `pendidikan` VARCHAR(191) NULL,
    `pekerjaan` VARCHAR(191) NULL,
    `id_pekerjaan` INTEGER NULL,
    `alamat_pasien_provinsi` VARCHAR(191) NULL,
    `alamat_pasien_kota` VARCHAR(191) NULL,
    `alamat_pasien_kec` VARCHAR(191) NULL,
    `alamat_pasien_desa` VARCHAR(191) NULL,
    `alamat_pasien_detail` VARCHAR(191) NULL,
    `nama_penanggungjawab` VARCHAR(191) NULL,
    `kontak_pj` VARCHAR(191) NULL,
    `alamat_pj_provinsi` VARCHAR(191) NULL,
    `alamat_pj_kota` VARCHAR(191) NULL,
    `alamat_pj_kec` VARCHAR(191) NULL,
    `alamat_pj_desa` VARCHAR(191) NULL,
    `alamat_pj_detail` VARCHAR(191) NULL,
    `published` BOOLEAN NULL DEFAULT false,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pekerjaan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_pekerjaan` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `agama` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `list_agama` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `status_kawin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `list_status_kawin` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pendidikan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `list_pendidikan` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `golongan_darah` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `list_golongan_darah` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pasien_igd` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_pasien_rm` INTEGER NULL,
    `tgl_masuk` VARCHAR(191) NULL,
    `jam_masuk` VARCHAR(191) NULL,
    `cara_masuk` VARCHAR(191) NULL,
    `asal_rujukan` VARCHAR(191) NULL,
    `alasan_rujukan` VARCHAR(191) NULL,
    `dokter_merujuk` VARCHAR(191) NULL,
    `kondisi_keluar_igd` VARCHAR(191) NULL,
    `tanggal_keluar_igd` VARCHAR(191) NULL,
    `jam_keluar_igd` VARCHAR(191) NULL,
    `pembayaran_igd` VARCHAR(191) NULL,
    `published` BOOLEAN NULL DEFAULT false,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tindakan_igd` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_pasien_igd` INTEGER NOT NULL,
    `tindakan` VARCHAR(191) NULL,
    `jam_tindakan` VARCHAR(191) NULL,
    `catatan` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `list_tindakan_igd` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tindakan` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `obat_pasien_igd` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_pasien_igd` INTEGER NOT NULL,
    `obat` VARCHAR(191) NULL,
    `quantity` VARCHAR(191) NULL,
    `catatan` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `list_obat_pasien_igd` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `list_obat` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `pasien_igd` ADD CONSTRAINT `pasien_igd_id_pasien_rm_fkey` FOREIGN KEY (`id_pasien_rm`) REFERENCES `rekam_medis_pasien`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tindakan_igd` ADD CONSTRAINT `tindakan_igd_id_pasien_igd_fkey` FOREIGN KEY (`id_pasien_igd`) REFERENCES `pasien_igd`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `obat_pasien_igd` ADD CONSTRAINT `obat_pasien_igd_id_pasien_igd_fkey` FOREIGN KEY (`id_pasien_igd`) REFERENCES `pasien_igd`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
