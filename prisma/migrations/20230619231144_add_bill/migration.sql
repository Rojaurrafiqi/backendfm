-- CreateTable
CREATE TABLE `bill` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `no_bill` VARCHAR(191) NULL,
    `no_registrasi` VARCHAR(191) NULL,
    `id_pasien` INTEGER NULL,
    `id_dokter` INTEGER NULL,
    `id_poli` INTEGER NULL,
    `asuransi` VARCHAR(191) NULL,
    `status` VARCHAR(191) NULL,
    `diskon` VARCHAR(191) NULL,
    `total` VARCHAR(191) NULL,
    `catatan` VARCHAR(191) NULL DEFAULT '-',
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bill_detail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `no_bill` VARCHAR(191) NULL,
    `no_registrasi` VARCHAR(191) NULL,
    `id_pasien` INTEGER NULL,
    `id_dokter` INTEGER NULL,
    `id_poli` INTEGER NULL,
    `asuransi` VARCHAR(191) NULL,
    `status` VARCHAR(191) NULL,
    `diskon` VARCHAR(191) NULL,
    `total` VARCHAR(191) NULL,
    `catatan` VARCHAR(191) NULL DEFAULT '-',
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `bill` ADD CONSTRAINT `bill_id_pasien_fkey` FOREIGN KEY (`id_pasien`) REFERENCES `rekam_medis_pasien`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
