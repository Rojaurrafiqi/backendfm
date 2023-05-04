/*
  Warnings:

  - You are about to drop the `list_pasien_igd_penanganan` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `list_pasien_igd_penanganan` DROP FOREIGN KEY `list_pasien_igd_penanganan_id_pasien_igd_fkey`;

-- DropForeignKey
ALTER TABLE `list_pasien_igd_penanganan` DROP FOREIGN KEY `list_pasien_igd_penanganan_id_triase_ats_pasien_igd_fkey`;

-- DropTable
DROP TABLE `list_pasien_igd_penanganan`;

-- CreateTable
CREATE TABLE `asesmen_awal_pasien_igd` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kegawatan_pernafasan` VARCHAR(191) NULL,
    `kehilangan_tonus_otot` VARCHAR(191) NULL,
    `nyeri` VARCHAR(191) NULL,
    `perlambatan_sirkulasi` VARCHAR(191) NULL,
    `faktor_pembangkit_gejala_fisik` VARCHAR(191) NULL,
    `masalah_keperawatan` VARCHAR(191) NULL,
    `pelayanan_spiritual` VARCHAR(191) NULL,
    `perlu_didoakan` VARCHAR(191) NULL,
    `bimbingan_rohani` VARCHAR(191) NULL,
    `pendampingan_rohani` VARCHAR(191) NULL,
    `nama_orang_yang_ingin_dihubungi` VARCHAR(191) NULL,
    `alamat_orang_yang_ingin_dihubungi` VARCHAR(191) NULL,
    `hubungan_dengan_pasien` VARCHAR(191) NULL,
    `no_telpon_orang_yang_ingin_dihubungi` VARCHAR(191) NULL,
    `rencana_perawatan_lanjutan` VARCHAR(191) NULL,
    `ligkungan_disiapkan` VARCHAR(191) NULL,
    `perawat_di_rumah` VARCHAR(191) NULL,
    `fasilitasi_rs_homecare` VARCHAR(191) NULL,
    `asesmen_informasi_reaksi_pasien` VARCHAR(191) NULL,
    `masalah_keperawatan_reaksi_pasien` VARCHAR(191) NULL,
    `asesmen_informasi_reaksi_keluarga` VARCHAR(191) NULL,
    `masalah_keperawatan_reaksi_keluarga` VARCHAR(191) NULL,
    `dukungan_pelayanan_bagi_pasien` VARCHAR(191) NULL,
    `kebutuhan_alternative` VARCHAR(191) NULL,
    `asesmen_informasi_faktor_resiko_keluarga_ditinggalkan` VARCHAR(191) NULL,
    `masalah_keperawatan_faktor_resiko_keluarga_ditinggalkan` VARCHAR(191) NULL,
    `id_pasien_igd` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `asesmen_awal_pasien_igd` ADD CONSTRAINT `asesmen_awal_pasien_igd_id_pasien_igd_fkey` FOREIGN KEY (`id_pasien_igd`) REFERENCES `pasien_igd`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
