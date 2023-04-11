-- CreateTable
CREATE TABLE `list_pasien_igd_penanganan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_pasien_igd` INTEGER NOT NULL,
    `id_triase_ats_pasien_igd` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `list_pasien_igd_penanganan` ADD CONSTRAINT `list_pasien_igd_penanganan_id_pasien_igd_fkey` FOREIGN KEY (`id_pasien_igd`) REFERENCES `pasien_igd`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `list_pasien_igd_penanganan` ADD CONSTRAINT `list_pasien_igd_penanganan_id_triase_ats_pasien_igd_fkey` FOREIGN KEY (`id_triase_ats_pasien_igd`) REFERENCES `triase_ats_pasien_igd`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
