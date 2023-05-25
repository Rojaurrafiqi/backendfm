-- CreateTable
CREATE TABLE `pasien_ralan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_pasien_rm` INTEGER NULL,
    `id_poli` INTEGER NULL,
    `id_jadwal_poliklinik` INTEGER NULL,
    `id_pembayaran` INTEGER NULL,
    `id_dokter` INTEGER NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `poliklinik` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `daftar_poliklinik` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `rekam_medis_pasienId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `jadwal_poliklinik` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_poli` INTEGER NULL,
    `id_hari` INTEGER NULL,
    `id_dokter` INTEGER NULL,
    `jam` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `rekam_medis_pasienId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pembayaran` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jenis_pembayaran` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nama_hari` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `list_nama_hari` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `pasien_ralan` ADD CONSTRAINT `pasien_ralan_id_pasien_rm_fkey` FOREIGN KEY (`id_pasien_rm`) REFERENCES `rekam_medis_pasien`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pasien_ralan` ADD CONSTRAINT `pasien_ralan_id_poli_fkey` FOREIGN KEY (`id_poli`) REFERENCES `poliklinik`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pasien_ralan` ADD CONSTRAINT `pasien_ralan_id_jadwal_poliklinik_fkey` FOREIGN KEY (`id_jadwal_poliklinik`) REFERENCES `jadwal_poliklinik`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pasien_ralan` ADD CONSTRAINT `pasien_ralan_id_pembayaran_fkey` FOREIGN KEY (`id_pembayaran`) REFERENCES `pembayaran`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pasien_ralan` ADD CONSTRAINT `pasien_ralan_id_dokter_fkey` FOREIGN KEY (`id_dokter`) REFERENCES `dokter`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `poliklinik` ADD CONSTRAINT `poliklinik_rekam_medis_pasienId_fkey` FOREIGN KEY (`rekam_medis_pasienId`) REFERENCES `rekam_medis_pasien`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `jadwal_poliklinik` ADD CONSTRAINT `jadwal_poliklinik_id_poli_fkey` FOREIGN KEY (`id_poli`) REFERENCES `poliklinik`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `jadwal_poliklinik` ADD CONSTRAINT `jadwal_poliklinik_id_hari_fkey` FOREIGN KEY (`id_hari`) REFERENCES `nama_hari`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `jadwal_poliklinik` ADD CONSTRAINT `jadwal_poliklinik_id_dokter_fkey` FOREIGN KEY (`id_dokter`) REFERENCES `dokter`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `jadwal_poliklinik` ADD CONSTRAINT `jadwal_poliklinik_rekam_medis_pasienId_fkey` FOREIGN KEY (`rekam_medis_pasienId`) REFERENCES `rekam_medis_pasien`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
