-- CreateTable
CREATE TABLE `jual_barang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `no_transaksi` VARCHAR(191) NULL,
    `no_registrasi` VARCHAR(191) NULL,
    `id_ruang_sumber_obat` VARCHAR(191) NULL,
    `id_apotek` VARCHAR(191) NULL,
    `jenis_penjualan` VARCHAR(191) NULL,
    `id_pasien` INTEGER NULL,
    `id_dokter` INTEGER NULL,
    `id_apoteker` INTEGER NULL,
    `nama_pasien_luar` VARCHAR(191) NULL,
    `nama_dokter_luar` VARCHAR(191) NULL,
    `status_ambil_resep` VARCHAR(191) NULL,
    `nilai_asuransi_bayar` VARCHAR(191) NULL,
    `nilai_pasien_bayar` VARCHAR(191) NULL,
    `diskon` VARCHAR(191) NULL,
    `total_transaksi` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `rekam_medis_pasienId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `jual_barang` ADD CONSTRAINT `jual_barang_rekam_medis_pasienId_fkey` FOREIGN KEY (`rekam_medis_pasienId`) REFERENCES `rekam_medis_pasien`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
