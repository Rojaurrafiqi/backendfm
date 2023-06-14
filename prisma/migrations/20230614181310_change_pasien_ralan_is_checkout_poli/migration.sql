/*
  Warnings:

  - You are about to drop the column `isCheckout_poli` on the `pasien_ralan` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `pasien_ralan` DROP COLUMN `isCheckout_poli`,
    ADD COLUMN `isCheckout_Poli` INTEGER NULL;
