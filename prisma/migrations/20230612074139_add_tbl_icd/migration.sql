-- CreateTable
CREATE TABLE `icd` (
    `id_icd` INTEGER NOT NULL AUTO_INCREMENT,
    `code_dx` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `keterangan` VARCHAR(191) NULL,
    `grup` VARCHAR(191) NULL,

    PRIMARY KEY (`id_icd`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
