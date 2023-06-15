-- CreateTable
CREATE TABLE `jual_barang_detail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `no_transaksi` VARCHAR(191) NULL,
    `no_registrasi` VARCHAR(191) NULL,
    `resep` VARCHAR(191) NULL,
    `no_urut` VARCHAR(191) NULL,
    `nama_barang` VARCHAR(191) NULL,
    `racikan_jumlah` VARCHAR(191) NULL,
    `racikan_jumlah_diambil` VARCHAR(191) NULL,
    `racikan_kemasan` VARCHAR(191) NULL,
    `qty` VARCHAR(191) NULL,
    `satuan` VARCHAR(191) NULL,
    `aturan_pakai` VARCHAR(191) NULL,
    `harga_jual` VARCHAR(191) NULL,
    `status_harus_bayar` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
