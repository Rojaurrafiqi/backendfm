-- CreateTable
CREATE TABLE `jual_barang_detail_racikan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `no_urut` INTEGER NULL,
    `no_registrasi` VARCHAR(191) NULL,
    `resep` VARCHAR(191) NULL,
    `satuan` VARCHAR(191) NULL,
    `id_barang` INTEGER NULL,
    `qty` VARCHAR(191) NULL,
    `harga` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `jual_barang_detail_racikan` ADD CONSTRAINT `jual_barang_detail_racikan_id_barang_fkey` FOREIGN KEY (`id_barang`) REFERENCES `barang`(`id_barang`) ON DELETE SET NULL ON UPDATE CASCADE;
