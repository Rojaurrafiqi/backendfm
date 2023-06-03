-- AlterTable
ALTER TABLE `pasien_ralan` ADD COLUMN `tipe_pasienId` INTEGER NULL;

-- CreateTable
CREATE TABLE `tipe_pasien` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jenis_tipe_pasien` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `pasien_ralan` ADD CONSTRAINT `pasien_ralan_tipe_pasienId_fkey` FOREIGN KEY (`tipe_pasienId`) REFERENCES `tipe_pasien`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
