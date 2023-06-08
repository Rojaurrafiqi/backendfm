/*
  Warnings:

  - You are about to drop the column `id_grup` on the `barang` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `barang` DROP FOREIGN KEY `barang_id_grup_fkey`;

-- DropForeignKey
ALTER TABLE `barang` DROP FOREIGN KEY `barang_id_kategori_fkey`;

-- AlterTable
ALTER TABLE `barang` DROP COLUMN `id_grup`,
    ADD COLUMN `grup` INTEGER NOT NULL DEFAULT 1;
