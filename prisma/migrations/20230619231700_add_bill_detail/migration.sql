/*
  Warnings:

  - You are about to drop the column `diskon` on the `bill_detail` table. All the data in the column will be lost.
  - You are about to drop the column `id_dokter` on the `bill_detail` table. All the data in the column will be lost.
  - You are about to drop the column `id_poli` on the `bill_detail` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `bill_detail` table. All the data in the column will be lost.
  - You are about to drop the column `total` on the `bill_detail` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `bill` DROP FOREIGN KEY `bill_id_pasien_fkey`;

-- AlterTable
ALTER TABLE `bill` ADD COLUMN `rekam_medis_pasienId` INTEGER NULL;

-- AlterTable
ALTER TABLE `bill_detail` DROP COLUMN `diskon`,
    DROP COLUMN `id_dokter`,
    DROP COLUMN `id_poli`,
    DROP COLUMN `status`,
    DROP COLUMN `total`,
    ADD COLUMN `harga` VARCHAR(191) NULL,
    ADD COLUMN `item` VARCHAR(191) NULL,
    ADD COLUMN `jp` VARCHAR(191) NULL,
    ADD COLUMN `js` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `bill` ADD CONSTRAINT `bill_rekam_medis_pasienId_fkey` FOREIGN KEY (`rekam_medis_pasienId`) REFERENCES `rekam_medis_pasien`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
