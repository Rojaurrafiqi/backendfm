-- CreateTable
CREATE TABLE `Barang` (
    `id_barang` INTEGER NOT NULL,
    `grup` INTEGER NOT NULL DEFAULT 1,
    `id_bpjs` VARCHAR(191) NOT NULL DEFAULT '-',
    `id_kategori` INTEGER NOT NULL,
    `nama_barang` VARCHAR(191) NULL,
    `nama_alias` VARCHAR(191) NOT NULL DEFAULT '-',
    `nama_barang_lengkap` VARCHAR(191) NULL,
    `no_batch` VARCHAR(191) NOT NULL DEFAULT '0',
    `barcode` VARCHAR(191) NOT NULL DEFAULT '-',
    `sumber_brg` INTEGER NOT NULL DEFAULT 0,
    `id_produsen` INTEGER NOT NULL,
    `isasset` INTEGER NOT NULL DEFAULT 0,
    `jenis_asset` INTEGER NOT NULL DEFAULT 0,
    `iscontrolstock` INTEGER NOT NULL DEFAULT 1,
    `isdijual` INTEGER NOT NULL DEFAULT 1,
    `id_jenis` INTEGER NOT NULL DEFAULT 10,
    `id_bentuk` INTEGER NOT NULL DEFAULT 10,
    `kandungan_isi` DOUBLE NOT NULL DEFAULT 0.00,
    `kandungan_satuan` VARCHAR(191) NULL,
    `kemasan` VARCHAR(191) NULL,
    `kemasan_isi` INTEGER NOT NULL DEFAULT 0,
    `kemasan_satuan` VARCHAR(191) NULL,
    `hpp_awal` DOUBLE NOT NULL DEFAULT 0.00,
    `harga_dasar` DOUBLE NOT NULL DEFAULT 0.00,
    `tax` VARCHAR(191) NOT NULL DEFAULT 'N-T',
    `isresep` INTEGER NOT NULL DEFAULT 0,
    `hrg_jual1` DOUBLE NOT NULL DEFAULT 0.00000000,
    `pcn_jual1` DOUBLE NOT NULL DEFAULT 0.00,
    `hrg_jual2` DOUBLE NOT NULL DEFAULT 0.00000000,
    `pcn_jual2` DOUBLE NOT NULL DEFAULT 0.00,
    `hrg_jual3` DOUBLE NOT NULL DEFAULT 0.00000000,
    `pcn_jual3` DOUBLE NOT NULL DEFAULT 0.00,
    `sts_account_setup` INTEGER NOT NULL DEFAULT 0,
    `acc_asset` VARCHAR(191) NULL,
    `acc_hpp_biaya` VARCHAR(191) NULL,
    `acc_income` VARCHAR(191) NULL,
    `keterangan` VARCHAR(191) NOT NULL DEFAULT '-',
    `isused` INTEGER NOT NULL DEFAULT 1,
    `user_created` VARCHAR(191) NULL,
    `date_created` DATETIME(3) NULL,
    `user_modified` VARCHAR(191) NULL,
    `date_modified` DATETIME(3) NULL,
    `catatan` VARCHAR(191) NOT NULL DEFAULT '-',
    `sts_barang` INTEGER NOT NULL DEFAULT 0,
    `sts_ada` INTEGER NOT NULL DEFAULT 1,
    `sts_obat` INTEGER NOT NULL DEFAULT 0,
    `id_gol` INTEGER NULL,

    PRIMARY KEY (`id_barang`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kasir` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_pasien_rm` INTEGER NULL,
    `metode_pembayaran` VARCHAR(191) NULL,
    `item` VARCHAR(191) NULL,
    `quantity` VARCHAR(191) NULL,
    `harga_satuan` VARCHAR(191) NULL,
    `total_harga` VARCHAR(191) NULL,
    `diskon` VARCHAR(191) NULL,
    `status_pembayaran` VARCHAR(191) NULL,
    `keterangan` VARCHAR(191) NULL,
    `kirim_apotek` BOOLEAN NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `kasir` ADD CONSTRAINT `kasir_id_pasien_rm_fkey` FOREIGN KEY (`id_pasien_rm`) REFERENCES `rekam_medis_pasien`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
