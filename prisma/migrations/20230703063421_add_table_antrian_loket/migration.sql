-- CreateTable
CREATE TABLE `antrian` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tanggal` VARCHAR(191) NULL,
    `waktu` VARCHAR(191) NULL,
    `nomor` INTEGER NULL,
    `huruf` VARCHAR(191) NULL,
    `loket` INTEGER NULL,
    `panggil` INTEGER NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
