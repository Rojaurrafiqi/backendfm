-- CreateTable
CREATE TABLE `barang_produsen` (
    `id_produsen` INTEGER NOT NULL,
    `nama_produsen` VARCHAR(191) NULL,
    `alamat` VARCHAR(191) NULL,
    `kota` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL DEFAULT '-',
    `isdefault` INTEGER NULL DEFAULT 0,

    PRIMARY KEY (`id_produsen`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
