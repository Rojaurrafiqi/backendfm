/*
  Warnings:

  - The primary key for the `poliklinik` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `poliklinik` table. All the data in the column will be lost.
  - You are about to drop the column `kode_ruang` on the `poliklinik` table. All the data in the column will be lost.
  - You are about to drop the column `nama_poliklinik` on the `poliklinik` table. All the data in the column will be lost.
  - Added the required column `id_ruangan` to the `poliklinik` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `jadwal_poli` DROP FOREIGN KEY `jadwal_poli_id_poli_fkey`;

-- DropForeignKey
ALTER TABLE `jadwal_poliklinik` DROP FOREIGN KEY `jadwal_poliklinik_id_poli_fkey`;

-- AlterTable
ALTER TABLE `poliklinik` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    DROP COLUMN `kode_ruang`,
    DROP COLUMN `nama_poliklinik`,
    ADD COLUMN `id_ruangan` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `ket_ruangan` VARCHAR(191) NULL,
    ADD COLUMN `kode_bpjs` VARCHAR(191) NULL,
    ADD COLUMN `nama_ruangan` VARCHAR(191) NULL,
    ADD COLUMN `no_ruang` INTEGER NULL,
    ADD PRIMARY KEY (`id_ruangan`);
