-- DropForeignKey
ALTER TABLE `dokter` DROP FOREIGN KEY `dokter_id_user_fkey`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `id_rm` INTEGER NULL;
