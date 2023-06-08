-- CreateTable
CREATE TABLE `medrec_dx_lama` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `no_register` BIGINT NULL,
    `id_diagnosa` BIGINT NULL,
    `ket_diagnosa` VARCHAR(191) NULL,
    `id_code` VARCHAR(191) NULL,
    `sts_primer` INTEGER NULL,
    `sts_dx_claim` INTEGER NULL,
    `status` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
