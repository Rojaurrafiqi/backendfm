-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 30, 2023 at 01:30 PM
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
-- Table structure for table `tbl_mst_ruangan`
--

CREATE TABLE `tbl_mst_ruangan` (
  `id_ruangan` int(11) NOT NULL,
  `no_ruangan` char(2) DEFAULT NULL,
  `kode_bpjs` varchar(10) DEFAULT NULL,
  `grup_caller` int(11) DEFAULT 1,
  `nama_ruangan` varchar(80) DEFAULT NULL,
  `sts_poli_eksekutif` int(11) DEFAULT 0,
  `id_kelas_rawatan` int(11) DEFAULT 0,
  `id_grup_rawatan` int(11) DEFAULT 0,
  `id_tarif` int(11) DEFAULT NULL,
  `ket_ruangan` varchar(191) DEFAULT '-',
  `kode_tt` int(11) DEFAULT NULL,
  `id_grup_ruangan` int(11) DEFAULT 0,
  `isdefault` int(11) DEFAULT 0,
  `isactive` int(11) DEFAULT 1,
  `isapotik` int(11) DEFAULT 0,
  `sts_sa` int(11) DEFAULT 0,
  `date_closing_sa` datetime DEFAULT NULL,
  `user_closing_sa` varchar(30) DEFAULT NULL,
  `sts_poli` int(11) DEFAULT 0,
  `dicadangkan` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_mst_ruangan`
--

INSERT INTO `tbl_mst_ruangan` (`id_ruangan`, `no_ruangan`, `kode_bpjs`, `grup_caller`, `nama_ruangan`, `sts_poli_eksekutif`, `id_kelas_rawatan`, `id_grup_rawatan`, `id_tarif`, `ket_ruangan`, `kode_tt`, `id_grup_ruangan`, `isdefault`, `isactive`, `isapotik`, `sts_sa`, `date_closing_sa`, `user_closing_sa`, `sts_poli`, `dicadangkan`) VALUES
(1101, '50', 'UMM', 1, 'POLI UMUM A', 0, 0, 0, NULL, '-', NULL, 11, 1, 1, 0, 0, NULL, NULL, 0, 0),
(1102, '52', 'GIG', 1, 'POLI GIGI', 0, 0, 0, NULL, '-', NULL, 11, 1, 1, 0, 0, NULL, NULL, 0, 0),
(1109, '30', 'UMM', 1, 'POLI UMUM', 0, 0, 0, NULL, 'dr. Arifdian', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1110, '05', 'ORT', 1, 'POLI SPESIALIS ORTHOPAEDI DAN TRAUMATOLOGI', 0, 0, 0, NULL, 'dr MUHAMMAD RIZAL, Sp.OT', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1111, '07', 'ANA', 1, 'POLI SPESIALIS ANAK ', 0, 0, 0, NULL, 'dr. Rusdi Andid. SPA', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1112, '03', 'OBG', 1, 'POLI SPESIALIS KEBIDANAN DAN KANDUNGAN ', 0, 0, 0, NULL, 'dr. Taufik Wahyudi, SP.OG', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1113, '04', 'MAT', 1, 'POLI SPESIALIS MATA', 0, 0, 0, NULL, 'dr. Hj. Firdalena Meutia, SP.M', NULL, 11, 0, 1, 0, 0, NULL, NULL, 1, 0),
(1114, '20', 'BED', 1, 'POLI SPESIALIS BEDAH UMUM ', 0, 0, 0, NULL, '-', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1115, '27', 'INT', 1, 'POLI SPESIALIS PENYAKIT DALAM', 0, 0, 0, NULL, 'dr. Syamsu Umar, SP.PD', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1116, '26', 'OBG', 1, 'POLI SPESIALIS KEBIDANAN DAN KANDUNGAN ', 0, 0, 0, NULL, 'dr. Cut Meurah Yeni, SP.OG', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1117, '25', 'BED', 1, 'POLI SPESIALIS BEDAH DAN KONSULTAN BEDAH TUMOR', 0, 0, 0, NULL, 'dr. Noerfaisal  Darmi, SP.B(K) Onk', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1118, '24', 'URO', 1, 'POLI SPESIALIS BEDAH GINJAL DAN SALURAN KEMIH', 0, 0, 0, NULL, 'dr. Dahril, SP.U', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1119, '38', 'THT', 1, 'POLI SPESIALIS THT BEDAH KEPALA DAN LEHER -', 0, 0, 0, NULL, 'dr. Iqbal, SP.THT', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1120, '23', 'PAR', 1, 'POLI SPESIALIS PARU / PERNAPASAN', 0, 0, 0, NULL, 'DR DEWI BEHTRI YANIFITRI, SP.P (K)\r\ndr HERRY PRIYANTO, Sp.P(K)', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1121, '22', 'IRM', 1, 'POLI SPESIALIS REHABILITAS MEDIK', 0, 0, 0, NULL, 'dr. N. Heri Taufik, SP.RM', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1122, '35', 'JIW', 1, 'POLI SPESIALIS PSIKOLOG ', 0, 0, 0, NULL, '', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1123, '68', 'JIW', 1, 'POLI SPESIALIS PSIKOLOG (RUANG : 68)', 0, 0, 0, NULL, 'dr. Mursal Sidiq S.Psi M.Psi', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1124, '09', 'BTK', 1, 'POLI SPESIALIS BEDAH UMUM 9/20', 0, 0, 0, NULL, 'dr. H. T. Farizal Fadil, SP.B', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1125, '06', '015', 1, 'POLI SPESIALIS PENYAKIT DALAM', 1, 0, 0, NULL, 'dr. Azhari Gani, SP. PD, KKV ganti dr libya', 0, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1126, '17', 'SAR', 1, 'POLI SPESIALIS SARAF DAN KONSULTAN', 0, 0, 0, NULL, 'dr. Dr. Syahrul, SP.S', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1127, '16', 'KLT', 1, 'POLI SPESIALIS KULIT DAN KELAMIN', 1, 0, 0, NULL, 'dr. Siti Hajar SP.KK', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1128, '15', 'BED', 1, 'POLI SPESIALIS BEDAH ORTHOPAEDI', 0, 0, 0, NULL, 'dr. Dr. Azharudin SP.BO', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1129, '14', 'PAR', 1, 'POLI SPESIALIS PARU (KOSONG)', 0, 0, 0, NULL, 'dr. Dewi Behtri, SP.P', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1130, '13', 'JIW', 1, 'POLI SPESIALIS JIWA', 0, 0, 0, NULL, 'dr. Malawati, SP.KJ', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1131, '29', 'BED', 1, 'POLI SPESIALIS BEDAH UMUM ', 0, 0, 0, NULL, 'dr. Muhammad Yusuf, SP.B', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1132, '28', 'INT', 1, 'POLI SPESIALIS PENYAKIT DALAM ', 0, 0, 0, NULL, 'dr. Muzakir Ilyas, SP.PD', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1133, '08', 'THT', 1, 'POLI SPESIALIS THT ', 0, 0, 0, NULL, 'dr. Benny Kurnia, SP.THT', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1134, '02', 'ANA', 1, 'POLI SPESIALIS ANAK', 0, 0, 0, NULL, 'dr. Darnifayanti, M.ked. Ped,SP.A', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1135, '04', 'BTKV', 1, 'POLI SPESIALIS BEDAH TORAK, KARDIAK DAN VASKULAR', 0, 0, 0, NULL, 'dr. Yopie Afriandi Habibie, SP.BTKV', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1136, '11', 'JAN', 1, 'POLI SPESIALIS JANTUNG DAN PEMBULUH DARAH ', 0, 0, 0, NULL, 'dr. NOVITA , Sp.JP (K) FIHA', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1137, '19', 'OBG', 1, 'POLI SPESIALIS KANDUNGAN DAN KEBIDANAN', 0, 0, 0, NULL, 'dr LILI KUSWANI, Sp.OG', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1138, '32', 'GND', 1, 'POLI SPESIALIS GIGI DAN MULUT', 0, 0, 0, NULL, 'drg. Aya Amida, Sp.KG', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1139, '36', 'PAT', 1, 'POLI SPESIALIS POTOLOGI ANATOMI', 0, 0, 0, NULL, 'dr. Fajriah, SP. PK\r\n', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1141, '12', 'KLT', 1, 'POLI SPESIALIS KULIT DAN KELAMIN ', 0, 0, 0, NULL, 'dr. H. ahmad garli,Sp.k', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1142, '54', 'NZA', 1, 'POLI NABZA (NARKOBA PSIKOTROPIKA DAN ZAT ADIKTIF)', 0, 0, 0, NULL, 'dr.arifdian\r\ndr. mala wati.sp.Kj', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1143, '21', 'GIZ', 1, 'POLI SPESIALIS GIZI KLINIS', 0, 0, 0, NULL, 'dr. Iflan Nauval, M.Sclh.Sp.GK', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1144, '01', 'ORT', 1, 'POLI SPESIALIS ORTHOPAEDI DAN TRAUMATOLOGI ', 0, 0, 0, NULL, 'DR. SUBHAN THAIB. SP.OT', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1145, '30', NULL, 1, 'POLI SPESIALIS AKUPUNTUR', 0, 0, 0, NULL, 'dr. novitasari mujahid, Sp.Ak', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1146, '33', 'PTD', 1, 'POLI SPESIALIS GIGI PALSU', 0, 0, 0, NULL, 'drg. RIDWAN LIDAN, Sp.Pros', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1147, '62', 'SAR', 1, 'POLI SPESIALIS SARAF', 0, 0, 0, NULL, 'dr SRI HASTUTI, Sp.S', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1148, '63', 'SAR', 1, 'POLI SPESIALIS SARAF DAN KONSULTAN ', 0, 0, 0, NULL, 'dr FARIDA, Sp.S (K)', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1149, '65', 'PNM', 1, 'POLI SPESIALIS GIGI DAN MULUT 2', 0, 0, 0, NULL, 'drg AHMAD FAUDZI MUHARRIRI, Sp.KG', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1150, '31', 'THT', 1, 'POLI SPESIALIS THT BEDAH KEPALA DAN LEHER', 0, 0, 0, NULL, 'dr. IKBAL ISMAIL, M.Kes, Sp.THT', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1151, '69', 'JIW', 1, 'POLI SPESIALIS JIWA 13', 0, 0, 0, NULL, 'dr. SYAHRIAL Sp.KJ (K)', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1152, '34', 'KLT', 1, 'POLI SPESIALIS KULIT DAN KELAMIN', 0, 0, 0, NULL, 'DR RIZKY KURNIAWAN, M.KED (DV),SPDV', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1153, '18', 'MAT', 1, 'POLI SPESIALIS MATA ', 0, 0, 0, NULL, 'dr YUSNI, Sp.M', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1154, '72', 'MAT', 1, 'POLI SPESIALIS MATA (BPJS)', 0, 0, 0, NULL, 'DR MUTI LESTARI, M.KED(OPH) SP.M', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1155, '14', 'INT', 1, 'POLI SPESIALIS PENYAKIT DALAM', 0, 0, 0, NULL, '-', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1156, '29', '109', 1, 'POLI SPESIALIS BEDAH PLASTIK REKONSTRUKSI DAN ESTENTIK', 0, 0, 0, NULL, '', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1157, '-', '100', 1, 'YAKES TELKOM', 1, 0, 0, NULL, '-', NULL, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1158, '65', 'KON', 1, 'POLI SPESIALIS KEDOKTERAN GIGI ANAK', 0, 0, 0, NULL, 'DRG. AYUDIA RIFKI', 0, 11, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1301, NULL, 'IGD', 1, 'INSTALASI GAWAT DARURAT (IGD)', 0, 0, 0, NULL, '-', NULL, 13, 1, 1, 0, 0, NULL, NULL, 0, 0),
(1302, NULL, NULL, 1, 'INSTALASI GAWAT DARURAT (IGD) NEUSU', 0, 0, 0, NULL, '-', NULL, 13, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1501, NULL, NULL, 1, 'GUDANG UTAMA', 0, 0, 0, NULL, 'Gudang Cempaka', NULL, 15, 1, 1, 0, 1, NULL, NULL, 0, 0),
(1502, NULL, NULL, 1, 'APOTIK CEMPAKA LIMA', 0, 0, 0, NULL, '-', NULL, 15, 0, 1, 1, 1, NULL, NULL, 0, 0),
(1503, NULL, NULL, 1, 'APOTIK CEMPAKA LIMA AZHARA', 0, 0, 0, NULL, '-', NULL, 15, 0, 1, 1, 0, NULL, NULL, 0, 0),
(1504, NULL, NULL, 1, 'APOTIK CEMPAKA LIMA NESUE', 0, 0, 0, NULL, '-', NULL, 15, 0, 1, 1, 0, NULL, NULL, 0, 0),
(1505, NULL, NULL, 1, 'APOTIK KLINIK PRATAMA CEMPAKA LIMA', 0, 0, 0, NULL, '-', NULL, 15, 0, 0, 0, 0, NULL, NULL, 0, 0),
(1506, NULL, NULL, 1, 'KANTIN', 0, 0, 0, NULL, '-', NULL, 15, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1507, NULL, NULL, 1, 'BAKSOS', 0, 0, 0, NULL, '-', NULL, 15, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1508, NULL, NULL, 1, 'POLI GIGI NEUSU', 0, 0, 0, NULL, '-', NULL, 15, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1509, NULL, '-', 1, 'P3K RSCL', 0, 0, 0, NULL, 'keperluan p3k rscl', NULL, 15, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1510, NULL, NULL, 1, 'PAK NAS', 0, 0, 0, NULL, 'PAK NASRULLAH', 0, 15, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1511, NULL, NULL, 1, 'LAIN-LAIN', 0, 0, 0, NULL, '-', 0, 15, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1601, NULL, NULL, 1, 'LOKET PENDAFTARAN', 0, 0, 0, NULL, '-', NULL, 16, 1, 1, 0, 0, NULL, NULL, 0, 0),
(1602, NULL, NULL, 1, 'RUANGAN RAPID TEST NEUSU', 0, 0, 0, NULL, 'Ruang Tambahan', NULL, 16, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1603, NULL, NULL, 1, 'RUANGAN RAPID TEST PRATAMA', 0, 0, 0, NULL, '', NULL, 16, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1701, NULL, NULL, 1, 'RUANGAN DIREKTUR', 0, 0, 0, NULL, '-', NULL, 17, 1, 1, 0, 0, NULL, NULL, 0, 0),
(1702, NULL, NULL, 1, 'BAGIAN UMUM DAN PERLENGKAPAN', 0, 0, 0, NULL, '-', NULL, 17, 0, 1, 0, 0, NULL, NULL, 0, 0),
(1703, NULL, NULL, 1, 'KEUANGAN', 0, 0, 0, NULL, '-', NULL, 17, 0, 1, 0, 0, NULL, NULL, 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_mst_ruangan`
--
ALTER TABLE `tbl_mst_ruangan`
  ADD PRIMARY KEY (`id_ruangan`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_mst_ruangan`
--
ALTER TABLE `tbl_mst_ruangan`
  MODIFY `id_ruangan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1704;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
