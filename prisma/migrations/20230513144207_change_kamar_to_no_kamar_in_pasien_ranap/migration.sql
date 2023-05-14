/*
  Warnings:

  - You are about to drop the column `kamar` on the `pasien_ranap` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `pasien_ranap` DROP COLUMN `kamar`,
    ADD COLUMN `no_kamar` VARCHAR(191) NULL;
