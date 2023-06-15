-- AlterTable
ALTER TABLE `barang` ADD COLUMN `stok_barangId` INTEGER NULL;

-- AlterTable
ALTER TABLE `pasien_ralan` MODIFY `isCheckout_Poli` INTEGER NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `poliklinik` ADD COLUMN `kode_ruang` INTEGER NULL;

-- CreateTable
CREATE TABLE `stok_barang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_barang` INTEGER NOT NULL,
    `stok_gudang` VARCHAR(191) NULL,
    `stok_pinjam` VARCHAR(191) NULL,
    `stok_min` VARCHAR(191) NULL,
    `harga_pokok` VARCHAR(191) NULL,
    `harga_satuan` VARCHAR(191) NULL,
    `tgl_expired` VARCHAR(191) NULL,
    `no_batch` VARCHAR(191) NULL,
    `lokasi` VARCHAR(191) NULL,
    `keterangan` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `user_created` VARCHAR(191) NULL,
    `user_modified` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `stok_barang` ADD CONSTRAINT `stok_barang_id_barang_fkey` FOREIGN KEY (`id_barang`) REFERENCES `barang`(`id_barang`) ON DELETE RESTRICT ON UPDATE CASCADE;
