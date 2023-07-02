-- DropIndex
DROP INDEX `pasien_ralan_id_pembayaran_fkey` ON `pasien_ralan`;

-- AddForeignKey
ALTER TABLE `pasien_ralan` ADD CONSTRAINT `pasien_ralan_asuransi_fkey` FOREIGN KEY (`asuransi`) REFERENCES `tbl_mst_asuransi`(`id_asuransi`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pasien_ralan` ADD CONSTRAINT `pasien_ralan_dokter_fkey` FOREIGN KEY (`dokter`) REFERENCES `rekam_medis_pasien`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
