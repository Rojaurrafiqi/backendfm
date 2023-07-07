/*
  Warnings:

  - You are about to drop the column `file1` on the `pemeriksaan_penunjang_ralan` table. All the data in the column will be lost.
  - You are about to drop the column `file2` on the `pemeriksaan_penunjang_ralan` table. All the data in the column will be lost.
  - You are about to drop the column `file3` on the `pemeriksaan_penunjang_ralan` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `pemeriksaan_penunjang_ralan` DROP COLUMN `file1`,
    DROP COLUMN `file2`,
    DROP COLUMN `file3`,
    ADD COLUMN `berkas` VARCHAR(191) NULL;
