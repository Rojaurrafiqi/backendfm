/*
  Warnings:

  - You are about to alter the column `poliklinik` on the `pasien_ralan` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `pasien_ralan` MODIFY `poliklinik` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `pasien_ralan` ADD CONSTRAINT `pasien_ralan_poliklinik_fkey` FOREIGN KEY (`poliklinik`) REFERENCES `tbl_mst_ruangan`(`id_ruangan`) ON DELETE SET NULL ON UPDATE CASCADE;
