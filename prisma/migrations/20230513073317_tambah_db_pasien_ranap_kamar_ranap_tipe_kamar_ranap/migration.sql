-- CreateTable
CREATE TABLE `pasien_ranap` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_pasien_rm` INTEGER NULL,
    `tanggal_masuk` VARCHAR(191) NULL,
    `tanggal_keluar` VARCHAR(191) NULL,
    `kondisi_keluar` VARCHAR(191) NULL,
    `dokter` VARCHAR(191) NULL,
    `perawat` VARCHAR(191) NULL,
    `kamar` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kamar_ranap` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `no_kamar` VARCHAR(191) NULL,
    `no_bad` VARCHAR(191) NULL,
    `tipe_kamar` VARCHAR(191) NULL,
    `status_kamar` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipe_kamar_ranap` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipe` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `pasien_ranap` ADD CONSTRAINT `pasien_ranap_id_pasien_rm_fkey` FOREIGN KEY (`id_pasien_rm`) REFERENCES `rekam_medis_pasien`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
