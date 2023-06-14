-- CreateTable
CREATE TABLE `tarif_tindakan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_tarif` VARCHAR(191) NULL,
    `keterangan` VARCHAR(191) NULL,
    `satuan` VARCHAR(191) NULL,
    `acc_income` VARCHAR(191) NULL,
    `id_code` VARCHAR(191) NULL,
    `isfix` VARCHAR(191) NULL,
    `istarif_dokter` VARCHAR(191) NULL,
    `grup` VARCHAR(191) NULL,
    `level` VARCHAR(191) NULL,
    `id_parent` VARCHAR(191) NULL,
    `id_jenistarif` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
