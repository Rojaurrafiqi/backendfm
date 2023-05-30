-- AlterTable
ALTER TABLE `dokter` ADD COLUMN `id_user` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `dokter` ADD CONSTRAINT `dokter_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
