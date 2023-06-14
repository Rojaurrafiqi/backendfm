/*
  Warnings:

  - The primary key for the `tarif_tindakan` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `acc_income` on the `tarif_tindakan` table. All the data in the column will be lost.
  - You are about to drop the column `grup` on the `tarif_tindakan` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `tarif_tindakan` table. All the data in the column will be lost.
  - You are about to drop the column `id_code` on the `tarif_tindakan` table. All the data in the column will be lost.
  - You are about to drop the column `id_jenistarif` on the `tarif_tindakan` table. All the data in the column will be lost.
  - You are about to drop the column `id_parent` on the `tarif_tindakan` table. All the data in the column will be lost.
  - You are about to drop the column `isfix` on the `tarif_tindakan` table. All the data in the column will be lost.
  - You are about to drop the column `istarif_dokter` on the `tarif_tindakan` table. All the data in the column will be lost.
  - You are about to drop the column `keterangan` on the `tarif_tindakan` table. All the data in the column will be lost.
  - You are about to drop the column `level` on the `tarif_tindakan` table. All the data in the column will be lost.
  - You are about to drop the column `satuan` on the `tarif_tindakan` table. All the data in the column will be lost.
  - Made the column `id_tarif` on table `tarif_tindakan` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `tarif_tindakan` DROP PRIMARY KEY,
    DROP COLUMN `acc_income`,
    DROP COLUMN `grup`,
    DROP COLUMN `id`,
    DROP COLUMN `id_code`,
    DROP COLUMN `id_jenistarif`,
    DROP COLUMN `id_parent`,
    DROP COLUMN `isfix`,
    DROP COLUMN `istarif_dokter`,
    DROP COLUMN `keterangan`,
    DROP COLUMN `level`,
    DROP COLUMN `satuan`,
    ADD COLUMN `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `id_asuransi` VARCHAR(191) NULL,
    ADD COLUMN `nil_jp` VARCHAR(191) NULL,
    ADD COLUMN `nil_js` VARCHAR(191) NULL,
    ADD COLUMN `tarif` VARCHAR(191) NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NULL,
    ADD COLUMN `user_created` VARCHAR(191) NULL,
    ADD COLUMN `user_modified` VARCHAR(191) NULL,
    MODIFY `id_tarif` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id_tarif`);

-- CreateTable
CREATE TABLE `data_tindakan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_tarif` INTEGER NULL,
    `keterangan` VARCHAR(191) NULL,
    `satuan` VARCHAR(191) NULL,
    `acc_income` VARCHAR(191) NULL,
    `id_code` VARCHAR(191) NULL,
    `isfix` VARCHAR(191) NULL,
    `istarif_dokter` VARCHAR(191) NULL,
    `grup` VARCHAR(191) NULL,
    `level` VARCHAR(191) NULL,
    `id_parent` VARCHAR(191) NULL,
    `id_jenistarif` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `data_tindakan` ADD CONSTRAINT `data_tindakan_id_tarif_fkey` FOREIGN KEY (`id_tarif`) REFERENCES `tarif_tindakan`(`id_tarif`) ON DELETE SET NULL ON UPDATE CASCADE;
