/*
  Warnings:

  - The primary key for the `tbl_medrec_lama` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `no_register` on the `tbl_medrec_lama` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `date_closing_sa` on the `tbl_mst_ruangan` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `tbl_medrec_lama` DROP PRIMARY KEY,
    MODIFY `no_register` BIGINT  NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`no_register`);

-- AlterTable
ALTER TABLE `tbl_mst_ruangan` MODIFY `date_closing_sa` DATETIME NULL;
