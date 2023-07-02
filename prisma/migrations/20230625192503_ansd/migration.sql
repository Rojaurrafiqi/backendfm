-- DropIndex
DROP INDEX `rekam_medis_pasien_id_jk_fkey` ON `rekam_medis_pasien`;

-- AddForeignKey
ALTER TABLE `rekam_medis_pasien` ADD CONSTRAINT `rekam_medis_pasien_id_jk_fkey` FOREIGN KEY (`id_jk`) REFERENCES `gender`(`id_gender`) ON DELETE SET NULL ON UPDATE CASCADE;
