/*
  Warnings:

  - You are about to drop the column `nama_barang` on the `jual_barang_detail` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `jual_barang_detail` DROP COLUMN `nama_barang`,
    ADD COLUMN `id_barang` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `jual_barang_detail` ADD CONSTRAINT `jual_barang_detail_id_barang_fkey` FOREIGN KEY (`id_barang`) REFERENCES `barang`(`id_barang`) ON DELETE SET NULL ON UPDATE CASCADE;
