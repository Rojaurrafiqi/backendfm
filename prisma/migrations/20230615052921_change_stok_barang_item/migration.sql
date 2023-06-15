-- DropForeignKey
ALTER TABLE `stok_barang` DROP FOREIGN KEY `stok_barang_id_barang_fkey`;

-- AlterTable
ALTER TABLE `stok_barang` MODIFY `id_barang` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `stok_barang` ADD CONSTRAINT `stok_barang_id_barang_fkey` FOREIGN KEY (`id_barang`) REFERENCES `barang`(`id_barang`) ON DELETE SET NULL ON UPDATE CASCADE;
