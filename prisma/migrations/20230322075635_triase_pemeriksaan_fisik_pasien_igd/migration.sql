-- CreateTable
CREATE TABLE `triase_pemeriksaan_fisik_pasien_igd` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mata` VARCHAR(191) NULL,
    `telinga` VARCHAR(191) NULL,
    `hidung` VARCHAR(191) NULL,
    `mulut` VARCHAR(191) NULL,
    `tenggorokan` VARCHAR(191) NULL,
    `leher` VARCHAR(191) NULL,
    `paru` VARCHAR(191) NULL,
    `jantung` VARCHAR(191) NULL,
    `abdomen` VARCHAR(191) NULL,
    `kandungan` VARCHAR(191) NULL,
    `kemaluan` VARCHAR(191) NULL,
    `exstremitas` VARCHAR(191) NULL,
    `status_lokalis` VARCHAR(191) NULL,
    `pemeriksaan_gigi` VARCHAR(191) NULL,
    `id_pasien_igd` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `triase_pemeriksaan_fisik_pasien_igd` ADD CONSTRAINT `triase_pemeriksaan_fisik_pasien_igd_id_pasien_igd_fkey` FOREIGN KEY (`id_pasien_igd`) REFERENCES `pasien_igd`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
