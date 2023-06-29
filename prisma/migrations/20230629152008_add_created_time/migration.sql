-- AlterTable
ALTER TABLE `form_pengkajian_awal_medis_ralan` ADD COLUMN `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NULL;
