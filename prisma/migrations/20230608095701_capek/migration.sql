/*
  Warnings:

  - You are about to drop the column `grup` on the `barang` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `barang_id_kategori_fkey` ON `barang`;

-- AlterTable
ALTER TABLE `barang` DROP COLUMN `grup`,
    ADD COLUMN `id_grup` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `barang` ADD CONSTRAINT `barang_id_grup_fkey` FOREIGN KEY (`id_grup`) REFERENCES `barang_grup`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `barang` ADD CONSTRAINT `barang_id_kategori_fkey` FOREIGN KEY (`id_kategori`) REFERENCES `barang_kategori`(`id_kategori`) ON DELETE RESTRICT ON UPDATE CASCADE;
