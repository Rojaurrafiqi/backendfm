/*
  Warnings:

  - You are about to drop the column `id_dokter` on the `bill` table. All the data in the column will be lost.
  - You are about to drop the column `rekam_medis_pasienId` on the `bill` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `bill` DROP FOREIGN KEY `bill_rekam_medis_pasienId_fkey`;

-- DropIndex
DROP INDEX `bill_id_pasien_fkey` ON `bill`;

-- AlterTable
ALTER TABLE `bill` DROP COLUMN `id_dokter`,
    DROP COLUMN `rekam_medis_pasienId`,
    ADD COLUMN `dokter` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `bill` ADD CONSTRAINT `bill_id_pasien_fkey` FOREIGN KEY (`id_pasien`) REFERENCES `rekam_medis_pasien`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
