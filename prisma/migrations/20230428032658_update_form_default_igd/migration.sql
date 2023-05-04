/*
  Warnings:

  - You are about to drop the column `id_pasien_igd` on the `form_default_igd` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `form_default_igd` DROP FOREIGN KEY `form_default_igd_id_pasien_igd_fkey`;

-- AlterTable
ALTER TABLE `form_default_igd` DROP COLUMN `id_pasien_igd`;
