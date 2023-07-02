-- DropForeignKey
ALTER TABLE `rekam_medis_pasien` DROP FOREIGN KEY `rekam_medis_pasien_genderId_gender_fkey`;

-- AddForeignKey
ALTER TABLE `rekam_medis_pasien` ADD CONSTRAINT `rekam_medis_pasien_id_jk_fkey` FOREIGN KEY (`id_jk`) REFERENCES `gender`(`id_gender`) ON DELETE SET NULL ON UPDATE CASCADE;
