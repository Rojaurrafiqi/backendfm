-- CreateTable
CREATE TABLE `pemeriksaan_penunjang_ralan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `no_registrasi` VARCHAR(191) NULL,
    `id_pasien` INTEGER NULL,
    `hasil_lab_rutin` VARCHAR(191) NULL,
    `pemeriksaan_penunjang_lain` VARCHAR(191) NULL,
    `ringkasan` VARCHAR(191) NULL,

    UNIQUE INDEX `pemeriksaan_penunjang_ralan_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
