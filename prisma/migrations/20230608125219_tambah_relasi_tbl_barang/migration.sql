-- AddForeignKey
ALTER TABLE `barang` ADD CONSTRAINT `barang_id_produsen_fkey` FOREIGN KEY (`id_produsen`) REFERENCES `barang_produsen`(`id_produsen`) ON DELETE RESTRICT ON UPDATE CASCADE;
