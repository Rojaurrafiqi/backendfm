/*
  Warnings:

  - You are about to drop the column `deposite` on the `pasien_ralan` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `pasien_ralan` DROP COLUMN `deposite`,
    ADD COLUMN `deposit` VARCHAR(191) NULL;
