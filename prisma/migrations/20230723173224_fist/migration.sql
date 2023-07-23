-- DropForeignKey
ALTER TABLE `dokter` DROP FOREIGN KEY `dokter_id_user_fkey`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `id_rm` INTEGER NULL;

-- CreateTable
CREATE TABLE `pemeriksaan_penunjang_ralan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `no_registrasi` VARCHAR(191) NULL,
    `id_pasien` INTEGER NULL,
    `hasil_lab_rutin` VARCHAR(191) NULL,
    `pemeriksaan_penunjang_lain` VARCHAR(191) NULL,
    `ringkasan` VARCHAR(191) NULL,
    `berkas` VARCHAR(191) NULL,

    UNIQUE INDEX `pemeriksaan_penunjang_ralan_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_id_rm_fkey` FOREIGN KEY (`id_rm`) REFERENCES `rekam_medis_pasien`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
