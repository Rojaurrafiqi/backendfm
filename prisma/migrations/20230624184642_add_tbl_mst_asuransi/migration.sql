-- CreateTable
CREATE TABLE `tbl_mst_asuransi` (
    `id_asuransi` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_asuransi` VARCHAR(191) NULL,
    `singkatan` VARCHAR(191) NULL,
    `isjkn` INTEGER NULL,
    `iskapitasi` INTEGER NULL,
    `isfull_coverage` INTEGER NULL,
    `margin_jual` VARCHAR(191) NULL,
    `adm_berobat` VARCHAR(191) NULL,
    `sts_bayar_daftar` INTEGER NULL,
    `sts_bayar_kartu` INTEGER NULL,
    `isactive` INTEGER NULL,
    `tgl_pks_start` VARCHAR(191) NULL,
    `tgl_pks_end` VARCHAR(191) NULL,
    `isclaim_resep` INTEGER NULL,
    `no_akun_cash` VARCHAR(191) NULL,
    `no_akun_piutang` VARCHAR(191) NULL,

    PRIMARY KEY (`id_asuransi`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
