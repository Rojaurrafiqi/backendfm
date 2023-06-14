-- CreateTable
CREATE TABLE `tindakan_ralan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `no_registrasi` VARCHAR(191) NULL,
    `nama_pasien` VARCHAR(191) NULL,
    `nama_dokter` VARCHAR(191) NULL,
    `id_tindakan` INTEGER NULL,
    `catatan` VARCHAR(191) NULL,
    `tarif` VARCHAR(191) NULL,
    `poli` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tindakan_ralan` ADD CONSTRAINT `tindakan_ralan_id_tindakan_fkey` FOREIGN KEY (`id_tindakan`) REFERENCES `tarif_tindakan`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
