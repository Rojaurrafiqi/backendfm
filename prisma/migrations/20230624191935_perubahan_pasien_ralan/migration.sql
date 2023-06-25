/*
  Warnings:

  - You are about to drop the column `deposit` on the `pasien_ralan` table. All the data in the column will be lost.
  - You are about to drop the column `jenis_pasien` on the `pasien_ralan` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `pasien_ralan` DROP COLUMN `deposit`,
    DROP COLUMN `jenis_pasien`,
    ADD COLUMN `asuransi` VARCHAR(191) NULL,
    ADD COLUMN `biaya_adm` VARCHAR(191) NULL,
    ADD COLUMN `biaya_share_dokter` VARCHAR(191) NULL,
    ADD COLUMN `no_asuransi` VARCHAR(191) NULL;
