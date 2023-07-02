/*
  Warnings:

  - You are about to drop the column `genderId_gender` on the `rekam_medis_pasien` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `rekam_medis_pasien_genderId_gender_fkey` ON `rekam_medis_pasien`;

-- AlterTable
ALTER TABLE `rekam_medis_pasien` DROP COLUMN `genderId_gender`;
