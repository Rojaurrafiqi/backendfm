-- AlterTable
ALTER TABLE `rekam_medis_pasien` ADD COLUMN `grup_user` INTEGER NULL,
    ADD COLUMN `password` VARCHAR(191) NULL,
    ADD COLUMN `sts_user` INTEGER NULL;
