/*
  Warnings:

  - You are about to drop the column `checkout_poli` on the `pasien_ralan` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `pasien_ralan` DROP COLUMN `checkout_poli`,
    ADD COLUMN `isCheckout_poli` VARCHAR(191) NULL;
