/*
  Warnings:

  - You are about to drop the column `nama_dokter` on the `jadwal_poli` table. All the data in the column will be lost.
  - You are about to drop the column `nama_hari` on the `jadwal_poli` table. All the data in the column will be lost.
  - You are about to drop the column `nama_poli` on the `jadwal_poli` table. All the data in the column will be lost.
  - You are about to drop the column `id_dokter` on the `pasien_ralan` table. All the data in the column will be lost.
  - You are about to drop the column `id_jadwal_poliklinik` on the `pasien_ralan` table. All the data in the column will be lost.
  - You are about to drop the column `id_poli` on the `pasien_ralan` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `pasien_ralan` DROP FOREIGN KEY `pasien_ralan_id_dokter_fkey`;

-- DropForeignKey
ALTER TABLE `pasien_ralan` DROP FOREIGN KEY `pasien_ralan_id_jadwal_poliklinik_fkey`;

-- DropForeignKey
ALTER TABLE `pasien_ralan` DROP FOREIGN KEY `pasien_ralan_id_poli_fkey`;

-- AlterTable
ALTER TABLE `jadwal_poli` DROP COLUMN `nama_dokter`,
    DROP COLUMN `nama_hari`,
    DROP COLUMN `nama_poli`,
    ADD COLUMN `id_dokter` INTEGER NULL,
    ADD COLUMN `id_hari` INTEGER NULL,
    ADD COLUMN `id_poli` INTEGER NULL;

-- AlterTable
ALTER TABLE `pasien_ralan` DROP COLUMN `id_dokter`,
    DROP COLUMN `id_jadwal_poliklinik`,
    DROP COLUMN `id_poli`,
    ADD COLUMN `asal_rujukan` VARCHAR(191) NULL,
    ADD COLUMN `cara_daftar` VARCHAR(191) NULL,
    ADD COLUMN `checkout_poli` VARCHAR(191) NULL,
    ADD COLUMN `dokter` VARCHAR(191) NULL,
    ADD COLUMN `id_sumber_pasien` VARCHAR(191) NULL,
    ADD COLUMN `isKasir` VARCHAR(191) NULL,
    ADD COLUMN `isResep` VARCHAR(191) NULL,
    ADD COLUMN `jam_checkout` VARCHAR(191) NULL,
    ADD COLUMN `ket_kondisi_masuk` VARCHAR(191) NULL,
    ADD COLUMN `poliklinik` VARCHAR(191) NULL,
    ADD COLUMN `sts_pasien_checkout_poli` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `jadwal_poli` ADD CONSTRAINT `jadwal_poli_id_poli_fkey` FOREIGN KEY (`id_poli`) REFERENCES `poliklinik`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `jadwal_poli` ADD CONSTRAINT `jadwal_poli_id_hari_fkey` FOREIGN KEY (`id_hari`) REFERENCES `nama_hari`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `jadwal_poli` ADD CONSTRAINT `jadwal_poli_id_dokter_fkey` FOREIGN KEY (`id_dokter`) REFERENCES `dokter`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
