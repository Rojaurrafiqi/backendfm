/*
  Warnings:

  - You are about to drop the column `masalah_keperawatan_respon_pasien` on the `asesmen_awal_pasien_igd` table. All the data in the column will be lost.
  - You are about to drop the column `respon_pasien_terhadap_gejala` on the `asesmen_awal_pasien_igd` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `asesmen_awal_pasien_igd` DROP COLUMN `masalah_keperawatan_respon_pasien`,
    DROP COLUMN `respon_pasien_terhadap_gejala`,
    ADD COLUMN `masalah_keperawatan_respon_pasien_terhadap_gejala` VARCHAR(191) NULL;
