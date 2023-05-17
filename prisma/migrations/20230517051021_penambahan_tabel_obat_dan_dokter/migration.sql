-- CreateTable
CREATE TABLE `dokter` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_dokter` VARCHAR(191) NULL,
    `jenis_kelamin` VARCHAR(191) NULL,
    `tanggal_lahir` VARCHAR(191) NULL,
    `spesialis` VARCHAR(191) NULL,
    `nomor_hp` VARCHAR(191) NULL,
    `alamat` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `jadwal_praktik` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `obat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_obat` VARCHAR(191) NULL,
    `kategori_obat` VARCHAR(191) NULL,
    `deskripsi_obat` VARCHAR(191) NULL,
    `dosis_obat` VARCHAR(191) NULL,
    `efek_samping` VARCHAR(191) NULL,
    `peringatan` VARCHAR(191) NULL,
    `instruksi_penggunaan` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stok_obat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_obat` INTEGER NOT NULL,
    `jumlah_stok` VARCHAR(191) NULL,
    `tanggal_kadaluarsa` VARCHAR(191) NULL,
    `tanggal_penerimaan` VARCHAR(191) NULL,
    `lokasi_penyimpanan` VARCHAR(191) NULL,
    `batas_minimum_stok` VARCHAR(191) NULL,
    `status_stok` VARCHAR(191) NULL,
    `catatan` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `penjualan_obat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_obat` INTEGER NOT NULL,
    `jumlah` VARCHAR(191) NULL,
    `harga_satuan` VARCHAR(191) NULL,
    `diskon` VARCHAR(191) NULL,
    `total_harga` VARCHAR(191) NULL,
    `tanggal_penjualan` VARCHAR(191) NULL,
    `informasi_pembayaran` VARCHAR(191) NULL,
    `metode_pembayaran` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `resep` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_obat` INTEGER NOT NULL,
    `id_pasien_rm` INTEGER NULL,
    `id_dokter` INTEGER NULL,
    `tanggal_resep` VARCHAR(191) NULL,
    `dosis` VARCHAR(191) NULL,
    `frekuensi` VARCHAR(191) NULL,
    `instruksi_penggunaan` VARCHAR(191) NULL,
    `durasi_obat` VARCHAR(191) NULL,
    `jumlah` VARCHAR(191) NULL,
    `status_resep` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `resep_umum` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_obat` INTEGER NOT NULL,
    `nama_dokter` VARCHAR(191) NULL,
    `nama_pasien` VARCHAR(191) NULL,
    `tanggal_resep` VARCHAR(191) NULL,
    `dosis` VARCHAR(191) NULL,
    `frekuensi` VARCHAR(191) NULL,
    `instruksi_penggunaan` VARCHAR(191) NULL,
    `durasi_obat` VARCHAR(191) NULL,
    `jumlah` VARCHAR(191) NULL,
    `status_resep` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `stok_obat` ADD CONSTRAINT `stok_obat_id_obat_fkey` FOREIGN KEY (`id_obat`) REFERENCES `obat`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `penjualan_obat` ADD CONSTRAINT `penjualan_obat_id_obat_fkey` FOREIGN KEY (`id_obat`) REFERENCES `obat`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `resep` ADD CONSTRAINT `resep_id_obat_fkey` FOREIGN KEY (`id_obat`) REFERENCES `obat`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `resep` ADD CONSTRAINT `resep_id_pasien_rm_fkey` FOREIGN KEY (`id_pasien_rm`) REFERENCES `rekam_medis_pasien`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `resep` ADD CONSTRAINT `resep_id_dokter_fkey` FOREIGN KEY (`id_dokter`) REFERENCES `dokter`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `resep_umum` ADD CONSTRAINT `resep_umum_id_obat_fkey` FOREIGN KEY (`id_obat`) REFERENCES `obat`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
