/*
  Warnings:

  - You are about to drop the column `masalah_keperawatan` on the `asesmen_awal_pasien_igd` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `asesmen_awal_pasien_igd` DROP COLUMN `masalah_keperawatan`,
    ADD COLUMN `respon_pasien_terhadap_gejala` VARCHAR(191) NULL;
