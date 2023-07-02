-- AlterTable
ALTER TABLE `rekam_medis_pasien` ADD COLUMN `genderId_gender` INTEGER NULL;

-- CreateIndex
CREATE INDEX `rekam_medis_pasien_genderId_gender_fkey` ON `rekam_medis_pasien`(`genderId_gender`);

-- AddForeignKey
ALTER TABLE `rekam_medis_pasien` ADD CONSTRAINT `rekam_medis_pasien_genderId_gender_fkey` FOREIGN KEY (`genderId_gender`) REFERENCES `gender`(`id_gender`) ON DELETE SET NULL ON UPDATE CASCADE;
