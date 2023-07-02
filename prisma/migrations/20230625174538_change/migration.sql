/*
  Warnings:

  - You are about to alter the column `id_jk` on the `rekam_medis_pasien` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `rekam_medis_pasien` MODIFY `id_jk` INTEGER NULL;
