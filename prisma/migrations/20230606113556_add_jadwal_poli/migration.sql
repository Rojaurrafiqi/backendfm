-- CreateTable
CREATE TABLE `jadwal_poli` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_poli` VARCHAR(191) NULL,
    `nama_hari` VARCHAR(191) NULL,
    `nama_dokter` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
