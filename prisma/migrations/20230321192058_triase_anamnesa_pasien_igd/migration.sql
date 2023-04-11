-- CreateTable
CREATE TABLE `triase_anamnesa_pasien_igd` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `keluhan_utama` VARCHAR(191) NULL,
    `riwayat_perjalanan_penyakit` VARCHAR(191) NULL,
    `riwayat_penyakit_terdahulu` VARCHAR(191) NULL,
    `riwayat_pemakaian_obat` VARCHAR(191) NULL,
    `riwayat_penyakit_keluarga` VARCHAR(191) NULL,
    `id_pasien_igd` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `triase_anamnesa_pasien_igd` ADD CONSTRAINT `triase_anamnesa_pasien_igd_id_pasien_igd_fkey` FOREIGN KEY (`id_pasien_igd`) REFERENCES `pasien_igd`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
