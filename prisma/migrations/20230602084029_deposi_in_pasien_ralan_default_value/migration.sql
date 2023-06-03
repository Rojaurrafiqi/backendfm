/*
  Warnings:

  - You are about to alter the column `deposit` on the `pasien_ralan` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `pasien_ralan` MODIFY `deposit` INTEGER NULL DEFAULT 0;
