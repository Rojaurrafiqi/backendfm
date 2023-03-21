-- CreateTable
CREATE TABLE `triase_tanda_vital_pasien_igd` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tekanan_darah` VARCHAR(191) NULL,
    `frekuensi_nadi` VARCHAR(191) NULL,
    `frekuensi_nafas` VARCHAR(191) NULL,
    `suhu` VARCHAR(191) NULL,
    `sat_o2` VARCHAR(191) NULL,
    `riwayat_alergi_makanan` VARCHAR(191) NULL,
    `riwayat_alergi_obat` VARCHAR(191) NULL,
    `riwayat_alergi_lainya` VARCHAR(191) NULL,
    `berat_badan` VARCHAR(191) NULL,
    `tinggi_badan` VARCHAR(191) NULL,
    `id_pasien_igd` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `triase_tanda_vital_pasien_igd` ADD CONSTRAINT `triase_tanda_vital_pasien_igd_id_pasien_igd_fkey` FOREIGN KEY (`id_pasien_igd`) REFERENCES `pasien_igd`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
