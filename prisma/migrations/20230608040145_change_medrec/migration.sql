/*
  Warnings:

  - You are about to alter the column `date_closing_sa` on the `tbl_mst_ruangan` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `tbl_medrec_lama` MODIFY `no_register` BIGINT NOT NULL AUTO_INCREMENT;

-- AlterTable
ALTER TABLE `tbl_mst_ruangan` MODIFY `date_closing_sa` DATETIME NULL;
