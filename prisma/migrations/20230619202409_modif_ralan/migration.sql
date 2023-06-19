-- AlterTable
ALTER TABLE `jual_barang` MODIFY `no_transaksi` VARCHAR(191) NULL DEFAULT '-',
    MODIFY `no_registrasi` VARCHAR(191) NULL DEFAULT '-',
    MODIFY `id_ruang_sumber_obat` VARCHAR(191) NULL DEFAULT '-',
    MODIFY `id_apotek` VARCHAR(191) NULL DEFAULT '-',
    MODIFY `jenis_penjualan` VARCHAR(191) NULL DEFAULT '-',
    MODIFY `id_pasien` INTEGER NULL DEFAULT 0,
    MODIFY `id_dokter` INTEGER NULL DEFAULT 0,
    MODIFY `id_apoteker` INTEGER NULL DEFAULT 0,
    MODIFY `nama_pasien_luar` VARCHAR(191) NULL DEFAULT '-',
    MODIFY `nama_dokter_luar` VARCHAR(191) NULL DEFAULT '-',
    MODIFY `status_ambil_resep` VARCHAR(191) NULL DEFAULT '-',
    MODIFY `nilai_asuransi_bayar` VARCHAR(191) NULL DEFAULT '-',
    MODIFY `nilai_pasien_bayar` VARCHAR(191) NULL DEFAULT '-',
    MODIFY `total_transaksi` VARCHAR(191) NULL DEFAULT '-';

-- AlterTable
ALTER TABLE `pasien_ralan` MODIFY `isKasir` VARCHAR(191) NULL DEFAULT '0',
    MODIFY `isResep` VARCHAR(191) NULL DEFAULT '0';
