-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 30, 2023 at 01:53 PM
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
-- Table structure for table `barang_produsen`
--

CREATE TABLE `barang_produsen` (
  `id_produsen` int(11) NOT NULL,
  `nama_produsen` varchar(191) DEFAULT NULL,
  `alamat` varchar(191) DEFAULT NULL,
  `kota` varchar(191) DEFAULT NULL,
  `phone` varchar(191) DEFAULT NULL,
  `email` varchar(191) NOT NULL DEFAULT '-',
  `isdefault` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `barang_produsen`
--

INSERT INTO `barang_produsen` (`id_produsen`, `nama_produsen`, `alamat`, `kota`, `phone`, `email`, `isdefault`) VALUES
(1000, 'NONE', '-', '-', '-', '-', 1),
(1001, 'KIMIA FARMA', 'Jln. Todak No. 3', 'Banda Aceh', '29898923', '-', 0),
(1002, 'PT. UJICOBA', 'Banda Aceh', 'Banda Aceh', '111122223333', 'xxx@gmail.com', 0),
(1003, 'PT. BRATAKO', 'Cikarang', 'Cikarang', '-', '-', 0),
(1004, 'PT.JAYAMAS MEDICA INDUSTRI', 'Sidoarjo', 'Sidoarjo', '-', '-', 0),
(1005, 'MADAN CORP', 'Banda Aceh', 'Banda Aceh', '229892', '-', 0),
(1006, 'COBA', 'Coba', 'Coba', '-', '-', 0),
(1007, 'SEMOGA BISA', 'Test', 'Test', '-', '-', 0),
(1008, 'BELUM DIKETAHUI', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1009, 'MERCK', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1010, 'OTTO', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1011, 'INTERBAT', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1012, 'PHAROS', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1013, 'PRAFA', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1014, 'EISEI', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1015, 'MBS', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1016, 'SDM', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1017, 'FAHRENHEAD', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1018, 'OTSUKA', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1019, 'CENDO', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1020, 'BERNO', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1021, 'TANABE', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1022, 'PT. BINA SAN PRIMA', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1023, 'TERUMO', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1024, 'SANBE FARMA', 'Jl. Industri I No. 9 ', 'Bandung', '22630036', '-', 0),
(1025, 'LANSON', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1026, 'SANDOZ', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1027, 'KALBE', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1028, 'PROMED RAHARJO', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1029, 'UAP', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1030, 'SIMEX', ' Jalan Pelabuhan Ii Km. 9, Kecamatan Gunungguruh, Kebonmanggu, Sukabumi, Jawa Ba', 'Jawa Barat', '-', '-', 0),
(1031, 'HISAMITSU', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1032, 'AZTRA ZENECA', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1033, 'HOLI PHARMA ', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1034, 'SERVIER', 'Jl.H. R. Rasuna Said Blok X5 Kav . 2 3, Rt.1/Rw.2, Kuningan Tim', 'Jakarta', '-', '-', 0),
(1035, 'YUPARIN', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1036, 'BAYER', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1037, 'TAKEDA', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1038, 'TRANSFARMA', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1039, 'DEXA', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1040, 'ACTAVIS', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1041, 'PYRIDAM', 'Kemandoran 8 No 16', 'Jakarta', '-', '-', 0),
(1042, 'PT.PHARMA LABORATORIS', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1043, 'JANSSEN-CILAG', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1044, 'MEPPRO', ' Jl. Soekarno Hatta 789', 'Bandung', '-', '-', 0),
(1045, 'GUARDIAN', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1046, 'MEPRO', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1047, 'TEMPO', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1048, 'IKA', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1049, 'LAPI', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1050, 'VITABIOTIC', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1051, 'PT. CORONET CROWN', 'Sidoarjo', 'Sidoarjo', '-', '-', 0),
(1052, 'SOLAS', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1053, 'DANKOS', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1054, 'PT. MEPROFARM', 'Bandung', 'Bandung', '-', '-', 0),
(1055, 'VIFOR PHARMA', '-', '-', '-', '-', 0),
(1056, 'FUTAMED', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1057, 'ASTRA ZENECA', 'Medan', 'Medan', '-', '-', 0),
(1058, 'DARYA VARIA', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1059, 'SCHERING', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1060, 'SOHO', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1061, 'NOVELL', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1062, 'NUFARINDO', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1063, 'NUTRINDO', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1064, 'TROPICA', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1065, 'GLORIA', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1066, 'MEDIFARMA', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1067, 'SANOFI', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1068, 'MEDICOM', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1069, 'WESMONT', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1070, 'PFIZER', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1071, 'MUTIFA', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1072, 'INDOFARMA', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1073, 'FERRON', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1074, 'CONMED', 'Banda Aceh', 'Vbanda Aceh', '-', '-', 0),
(1075, 'GRACIA', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1076, 'ABBOT', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1077, 'TUNGGAL', ' Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1078, 'ELI LILI', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1079, 'KINOCARE', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1080, 'BRISTOL', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1081, 'MEIJI', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1082, 'ROCHE', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1083, 'PRIMA MEDIKA', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1084, 'DOKTER', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1085, 'BOEHRINGER', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1086, 'KONIMEX', 'Bnda Aceh', 'Banda Aceh', '-', '-', 0),
(1087, 'INFION', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1088, 'SCAN', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1089, 'DUMEX', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1090, 'MERCY', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1091, 'TEGUH', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1092, 'CAPRIFARMINDO', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1093, 'ASTELAS', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1094, 'BIOMEDIS', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1095, 'PT. METRO DRUG INDONESIA', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1096, 'PT. SANBE FARMA', 'Bandung', 'Bandung', '-', '-', 0),
(1097, 'GLAXO', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1098, 'K-LINK', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1099, 'ERELA', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1100, 'KONICARE', 'Bandung', '-', '-', '-', 0),
(1101, 'PT. CORSA INDUSTRIES', 'Tangerang', 'Tangerang', '-', '-', 0),
(1102, 'MBF', 'Banda Aceh ', 'Banda Aceh', '-', '-', 0),
(1103, 'AVENTIS', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1104, 'PT. ROI SURYA PRIMA FARMA', 'Pasuruan', 'Pasuruan', '-', '-', 0),
(1105, 'ESTELLE', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1106, 'DICO CILAS', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1107, 'IFARS', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1108, 'BIOVIT', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1109, 'ETHICA', 'Banda Aceh', 'Bnda Aceh', '-', '-', 0),
(1110, 'SOLVAY', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1111, 'YARINDO', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1112, 'WYETH K', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1113, 'NOVARTIS', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1114, 'PHAPROS', '-', '-', '-', '-', 0),
(1115, 'SQUIB', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1116, 'HIMALAYA', 'Banda Aceh ', 'Banda Aceh', '-', '-', 0),
(1117, 'PT. SOHO INDUSTRI PHARMASI', 'Jakarta', 'Jakarta', '-', '-', 0),
(1118, 'NICHOLAS', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1119, 'ORGANON', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1120, 'COMBIPHAR', '-', '-', '-', '-', 0),
(1121, 'PROCTER ', 'Banda Aceh ', 'Banda Aceh ', '-', '-', 0),
(1122, 'MERZ', '-', '-', '-', '-', 0),
(1123, 'ZAMBON', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1124, 'PHARMACIA', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1125, 'NELCO', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1126, 'PT. ERLIMPEX', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1127, 'ESCOLAB', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1128, 'MARION SAM', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1129, 'PARI PADANG', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1130, 'PHARMASI BINANGKIT', 'Bnada Aceh', 'Banda Aceh', '-', '-', 0),
(1131, 'EGO PHARMACETICAL', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1132, 'ALCON', '-', '-', '-', '-', 0),
(1133, 'SUNTHI SEPURI', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1134, 'SEARLE', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1135, 'FAHRENHEIT', 'Tangerang', 'Tangerang', '-', '-', 0),
(1136, 'PT. IFARS', '-', '-', '-', '-', 0),
(1137, 'BSN', 'Band Aceh', 'Banda Aceh', '-', '-', 0),
(1138, 'PT. PHAPROS TBK', '-', '-', '-', '-', 0),
(1139, 'NUTRIMAX', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1140, 'KONSINYASI', '-', '-', '-', '-', 0),
(1141, 'ACNE', '-', '-', '-', '-', 0),
(1142, 'DIPA', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1143, 'NUSAB', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1144, 'BRATACO', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1145, 'GEA', '-', '-', '-', '-', 0),
(1146, 'SURGIKA', '-', '-', '-', '-', 0),
(1147, 'ETICA', '-', '-', '-', '-', 0),
(1148, 'ALPHARMA', '-', '-', '-', '-=', 0),
(1149, 'SARI AYU', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1150, 'HEALT CARE', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1151, 'ZENECA', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1152, 'SMITH&NEPHEW', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1153, 'PHARMACORE', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1154, 'MECOSIN', 'Banda Aceh', 'Banda Aceh', '-', '-', 0),
(1155, 'MSD', '-', '-', '-', '-', 0),
(1156, 'PT. JAYAMAS MEDICA INDUSTRI', '-', '-', '-', '-', 0),
(1157, 'PT. RAJA DENTALENTA JAYA', 'Medan', 'Medan', '082162490063', '-', 0),
(1158, 'PT. AZURI BAHTERA RAYA', 'Jakarta', 'Jakarta', '02129479234', '-', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `barang_produsen`
--
ALTER TABLE `barang_produsen`
  ADD PRIMARY KEY (`id_produsen`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
