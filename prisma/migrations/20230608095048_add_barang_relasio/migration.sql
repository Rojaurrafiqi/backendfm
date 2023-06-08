/*
  Warnings:

  - You are about to drop the column `grup` on the `barang` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `barang` DROP COLUMN `grup`,
    ADD COLUMN `id_grup` INTEGER NULL;

-- CreateTable
CREATE TABLE `barang_kategori` (
    `id_kategori` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_kategori` VARCHAR(191) NULL,
    `keterangan` VARCHAR(191) NULL,
    `isasset` VARCHAR(191) NULL,
    `isdefault` VARCHAR(191) NULL,

    PRIMARY KEY (`id_kategori`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `barang_grup` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `grup` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `barang` ADD CONSTRAINT `barang_id_grup_fkey` FOREIGN KEY (`id_grup`) REFERENCES `barang_grup`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `barang` ADD CONSTRAINT `barang_id_kategori_fkey` FOREIGN KEY (`id_kategori`) REFERENCES `barang_kategori`(`id_kategori`) ON DELETE RESTRICT ON UPDATE CASCADE;
