/*
  Warnings:

  - The primary key for the `tarif_tindakan` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_asuransi` on the `tarif_tindakan` table. All the data in the column will be lost.
  - You are about to drop the column `id_tarif` on the `tarif_tindakan` table. All the data in the column will be lost.
  - Added the required column `id` to the `tarif_tindakan` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `data_tindakan` DROP FOREIGN KEY `data_tindakan_id_tarif_fkey`;

-- AlterTable
ALTER TABLE `tarif_tindakan` DROP PRIMARY KEY,
    DROP COLUMN `id_asuransi`,
    DROP COLUMN `id_tarif`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `keterangan` VARCHAR(191) NULL,
    ADD COLUMN `nama_tindakan` VARCHAR(191) NULL,
    ADD COLUMN `poli` VARCHAR(191) NULL,
    ADD COLUMN `satuan` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`id`);
