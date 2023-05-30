/*
  Warnings:

  - You are about to drop the column `jadwal_praktik` on the `dokter` table. All the data in the column will be lost.
  - You are about to drop the column `rekam_medis_pasienId` on the `jadwal_poliklinik` table. All the data in the column will be lost.
  - You are about to drop the column `rekam_medis_pasienId` on the `poliklinik` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `jadwal_poliklinik` DROP FOREIGN KEY `jadwal_poliklinik_rekam_medis_pasienId_fkey`;

-- DropForeignKey
ALTER TABLE `poliklinik` DROP FOREIGN KEY `poliklinik_rekam_medis_pasienId_fkey`;

-- AlterTable
ALTER TABLE `dokter` DROP COLUMN `jadwal_praktik`,
    ADD COLUMN `sub_spesialis` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `jadwal_poliklinik` DROP COLUMN `rekam_medis_pasienId`;

-- AlterTable
ALTER TABLE `poliklinik` DROP COLUMN `rekam_medis_pasienId`;

-- CreateTable
CREATE TABLE `jabatan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_jabatan` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
