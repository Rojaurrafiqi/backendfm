/*
  Warnings:

  - You are about to drop the column `daftar_poliklinik` on the `poliklinik` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `poliklinik` DROP COLUMN `daftar_poliklinik`,
    ADD COLUMN `nama_poliklinik` VARCHAR(191) NULL;
