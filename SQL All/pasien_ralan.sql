-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 30, 2023 at 04:29 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `filemedis_new`
--

-- --------------------------------------------------------

--
-- Table structure for table `pasien_ralan`
--

CREATE TABLE `pasien_ralan` (
  `id` int(11) NOT NULL,
  `id_pasien_rm` int(11) DEFAULT NULL,
  `id_pembayaran` int(11) DEFAULT NULL,
  `createdAt` datetime(3) DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) DEFAULT NULL,
  `jenis_konsultasi` varchar(191) DEFAULT NULL,
  `no_antrian` varchar(191) DEFAULT NULL,
  `catatan` varchar(191) DEFAULT NULL,
  `asal_rujukan` varchar(191) DEFAULT NULL,
  `cara_daftar` varchar(191) DEFAULT NULL,
  `dokter` int(11) DEFAULT NULL,
  `id_sumber_pasien` varchar(191) DEFAULT NULL,
  `isKasir` varchar(191) DEFAULT '0',
  `isResep` varchar(191) DEFAULT '0',
  `jam_checkout` varchar(191) DEFAULT NULL,
  `ket_kondisi_masuk` varchar(191) DEFAULT NULL,
  `poliklinik` int(11) DEFAULT NULL,
  `sts_pasien_checkout_poli` varchar(191) DEFAULT NULL,
  `no_registrasi` varchar(191) DEFAULT NULL,
  `isCheckout_Poli` int(11) DEFAULT 0,
  `asuransi` int(11) DEFAULT NULL,
  `biaya_adm` varchar(191) DEFAULT NULL,
  `biaya_share_dokter` varchar(191) DEFAULT NULL,
  `no_asuransi` varchar(191) DEFAULT NULL,
  `pembayaranId` int(11) DEFAULT NULL,
  `isBB` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pasien_ralan`
--

INSERT INTO `pasien_ralan` (`id`, `id_pasien_rm`, `id_pembayaran`, `createdAt`, `updatedAt`, `jenis_konsultasi`, `no_antrian`, `catatan`, `asal_rujukan`, `cara_daftar`, `dokter`, `id_sumber_pasien`, `isKasir`, `isResep`, `jam_checkout`, `ket_kondisi_masuk`, `poliklinik`, `sts_pasien_checkout_poli`, `no_registrasi`, `isCheckout_Poli`, `asuransi`, `biaya_adm`, `biaya_share_dokter`, `no_asuransi`, `pembayaranId`, `isBB`) VALUES
(12, 1121122926, NULL, '2023-06-26 09:06:57.863', '2023-06-26 09:06:57.863', 'offline', NULL, NULL, NULL, NULL, 1118010007, NULL, '0', '0', NULL, NULL, 1101, NULL, '23062616061121122926', 0, NULL, NULL, NULL, NULL, NULL, 1),
(13, 1121122928, NULL, '2023-06-26 09:10:56.549', '2023-06-26 16:50:00.393', 'offline', 'A31', NULL, NULL, NULL, 1118010007, NULL, '1', '2', NULL, NULL, 1101, NULL, '23062616101121122928', 1, 101, NULL, NULL, '12222122', NULL, 0),
(14, 1121122923, NULL, '2023-06-27 06:09:25.403', '2023-06-27 13:11:59.578', 'offline', 'A31', NULL, NULL, NULL, 1118010013, NULL, '1', '0', NULL, NULL, 1102, NULL, '23062713091121122923', 1, 100, '12000', '54000', NULL, NULL, 0),
(15, 1121122925, NULL, '2023-06-27 12:58:24.991', '2023-06-27 12:58:24.991', 'offline', 'A31', NULL, NULL, NULL, 1118010102, NULL, '0', '0', NULL, NULL, 1111, NULL, '23062719581121122925', 0, 101, NULL, NULL, '12222122', NULL, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pasien_ralan`
--
ALTER TABLE `pasien_ralan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pasien_ralan_id_pasien_rm_fkey` (`id_pasien_rm`),
  ADD KEY `pasien_ralan_pembayaranId_fkey` (`pembayaranId`),
  ADD KEY `pasien_ralan_asuransi_fkey` (`asuransi`),
  ADD KEY `pasien_ralan_dokter_fkey` (`dokter`),
  ADD KEY `pasien_ralan_poliklinik_fkey` (`poliklinik`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pasien_ralan`
--
ALTER TABLE `pasien_ralan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `pasien_ralan`
--
ALTER TABLE `pasien_ralan`
  ADD CONSTRAINT `pasien_ralan_asuransi_fkey` FOREIGN KEY (`asuransi`) REFERENCES `tbl_mst_asuransi` (`id_asuransi`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `pasien_ralan_dokter_fkey` FOREIGN KEY (`dokter`) REFERENCES `rekam_medis_pasien` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `pasien_ralan_id_pasien_rm_fkey` FOREIGN KEY (`id_pasien_rm`) REFERENCES `rekam_medis_pasien` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `pasien_ralan_pembayaranId_fkey` FOREIGN KEY (`pembayaranId`) REFERENCES `pembayaran` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `pasien_ralan_poliklinik_fkey` FOREIGN KEY (`poliklinik`) REFERENCES `tbl_mst_ruangan` (`id_ruangan`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
