-- AlterTable
ALTER TABLE `jual_barang_detail` MODIFY `racikan_jumlah` VARCHAR(191) NULL DEFAULT '-',
    MODIFY `racikan_jumlah_diambil` VARCHAR(191) NULL DEFAULT '-',
    MODIFY `racikan_kemasan` VARCHAR(191) NULL DEFAULT '-';
