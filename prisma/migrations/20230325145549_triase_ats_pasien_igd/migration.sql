-- CreateTable
CREATE TABLE `triase_ats_pasien_igd` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jalan_nafas` VARCHAR(191) NULL,
    `pernafasan_dewasa` VARCHAR(191) NULL,
    `pernafasan_anak` VARCHAR(191) NULL,
    `sirkulasi_dewasa` VARCHAR(191) NULL,
    `sirkulasi_anak` VARCHAR(191) NULL,
    `mental_status` VARCHAR(191) NULL,
    `skor_nyeri` VARCHAR(191) NULL,
    `assesment_triase` VARCHAR(191) NULL,
    `plan` VARCHAR(191) NULL,
    `id_pasien_igd` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `triase_ats_pasien_igd` ADD CONSTRAINT `triase_ats_pasien_igd_id_pasien_igd_fkey` FOREIGN KEY (`id_pasien_igd`) REFERENCES `pasien_igd`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
