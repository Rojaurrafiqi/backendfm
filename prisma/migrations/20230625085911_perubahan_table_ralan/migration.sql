/*
  Warnings:

  - You are about to drop the column `tipe_pasienId` on the `pasien_ralan` table. All the data in the column will be lost.
  - You are about to alter the column `dokter` on the `pasien_ralan` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `asuransi` on the `pasien_ralan` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `pasien_ralan` DROP FOREIGN KEY `pasien_ralan_id_pembayaran_fkey`;

-- DropForeignKey
ALTER TABLE `pasien_ralan` DROP FOREIGN KEY `pasien_ralan_tipe_pasienId_fkey`;

-- AlterTable
ALTER TABLE `pasien_ralan` DROP COLUMN `tipe_pasienId`,
    ADD COLUMN `pembayaranId` INTEGER NULL,
    MODIFY `dokter` INTEGER NULL,
    MODIFY `asuransi` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `pasien_ralan` ADD CONSTRAINT `pasien_ralan_pembayaranId_fkey` FOREIGN KEY (`pembayaranId`) REFERENCES `pembayaran`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
