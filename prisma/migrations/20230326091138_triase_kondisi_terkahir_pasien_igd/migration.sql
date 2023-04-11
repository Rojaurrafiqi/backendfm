-- CreateTable
CREATE TABLE `triase_kondisi_terakhir_pasien_igd` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `keadaan_umum` VARCHAR(191) NULL,
    `kesadaran` VARCHAR(191) NULL,
    `tekanan_darah` VARCHAR(191) NULL,
    `frekuensi_nadi` VARCHAR(191) NULL,
    `frekuensi_nafas` VARCHAR(191) NULL,
    `temperature` VARCHAR(191) NULL,
    `dokter_penanggung_jawab` VARCHAR(191) NULL,
    `id_pasien_igd` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `triase_kondisi_terakhir_pasien_igd` ADD CONSTRAINT `triase_kondisi_terakhir_pasien_igd_id_pasien_igd_fkey` FOREIGN KEY (`id_pasien_igd`) REFERENCES `pasien_igd`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
