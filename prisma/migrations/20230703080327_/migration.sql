/*
  Warnings:

  - Made the column `no_mr` on table `rekam_medis_pasien` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `rekam_medis_pasien` MODIFY `no_mr` VARCHAR(191) NOT NULL;
