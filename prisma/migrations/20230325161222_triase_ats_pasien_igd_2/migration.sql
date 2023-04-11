/*
  Warnings:

  - Made the column `jalan_nafas` on table `triase_ats_pasien_igd` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `triase_ats_pasien_igd` MODIFY `jalan_nafas` VARCHAR(191) NOT NULL;
