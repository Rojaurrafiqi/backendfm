-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_id_rm_fkey` FOREIGN KEY (`id_rm`) REFERENCES `rekam_medis_pasien`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
