/*
  Warnings:

  - Added the required column `id_pasien_igd` to the `triase_pasien_igd` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `triase_pasien_igd` ADD COLUMN `id_pasien_igd` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `triase_pasien_igd` ADD CONSTRAINT `triase_pasien_igd_id_pasien_igd_fkey` FOREIGN KEY (`id_pasien_igd`) REFERENCES `pasien_igd`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
