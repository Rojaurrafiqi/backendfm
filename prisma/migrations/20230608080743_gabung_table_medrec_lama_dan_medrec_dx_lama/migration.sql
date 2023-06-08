-- AddForeignKey
ALTER TABLE `medrec_dx_lama` ADD CONSTRAINT `medrec_dx_lama_no_register_fkey` FOREIGN KEY (`no_register`) REFERENCES `tbl_medrec_lama`(`no_register`) ON DELETE SET NULL ON UPDATE CASCADE;
