-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 30, 2023 at 01:52 PM
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
-- Table structure for table `barang_kategori`
--

CREATE TABLE `barang_kategori` (
  `id_kategori` int(11) NOT NULL,
  `nama_kategori` varchar(191) DEFAULT NULL,
  `keterangan` varchar(191) DEFAULT NULL,
  `isasset` varchar(191) DEFAULT NULL,
  `isdefault` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `barang_kategori`
--

INSERT INTO `barang_kategori` (`id_kategori`, `nama_kategori`, `keterangan`, `isasset`, `isdefault`) VALUES
(11, 'OBAT-OBATAN', 'Semua obat-obatan', '0', '0'),
(12, 'SUPLEMEN (MULTI VITAMIN)', 'Semua jenis vitamin', '0', '0'),
(13, 'ALAT-ALAT KESEHATAN (ALKES)', 'Seperti Abbocate, Spet, dll.. ', '0', '0'),
(14, 'BAHAN HABIS PAKAI (BHP)', 'Kertas, Tisue, dll', '0', '0'),
(15, 'BAHAN BAKU OBAT-OBATAN', NULL, '0', '0'),
(16, 'BAHAN BAKU PEMERIKSAAN LAB', NULL, '0', '0'),
(17, 'JAMU', NULL, '0', '0'),
(18, 'ALAT TULIS KANTOR (ATK)', NULL, '0', '0'),
(19, 'BARANG UMUM ( HV )', 'Susu Formula, Pampers, dll...', '0', '0'),
(50, 'BARANG ASSET - ELEKTRONIK', NULL, '0', '0'),
(51, 'BARANG ASSET - FURNITURE', NULL, '0', '0'),
(52, 'BARANG ASSET - ALAT KESEHATAN', NULL, '0', '0'),
(53, 'BARANG ASSET - KENDARAAN', NULL, '0', '0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `barang_kategori`
--
ALTER TABLE `barang_kategori`
  ADD PRIMARY KEY (`id_kategori`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `barang_kategori`
--
ALTER TABLE `barang_kategori`
  MODIFY `id_kategori` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
