/*
  Warnings:

  - You are about to drop the column `racikan_ke` on the `jual_barang_detail` table. All the data in the column will be lost.
  - You are about to drop the `jual_barang_detail_racikan` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `jual_barang_detail_racikan` DROP FOREIGN KEY `jual_barang_detail_racikan_id_barang_fkey`;

-- AlterTable
ALTER TABLE `jual_barang_detail` DROP COLUMN `racikan_ke`,
    ADD COLUMN `resep_ke` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `jual_barang_detail_racikan`;
