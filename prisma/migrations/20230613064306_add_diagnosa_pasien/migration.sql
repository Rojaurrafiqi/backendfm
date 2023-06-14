-- CreateTable
CREATE TABLE `diagnosa_pasien` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `no_registrasi` VARCHAR(191) NULL,
    `tgl_masuk` VARCHAR(191) NULL,
    `id_pasien` VARCHAR(191) NULL,
    `no_rm` VARCHAR(191) NULL,
    `code_diagnosa` VARCHAR(191) NULL,
    `diagnosa` VARCHAR(191) NULL,
    `keterangan` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
