-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2016 at 02:16 AM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `db_voala`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
`id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`) VALUES
(1, 'admin', '21232f297a57a5a743894a0e4a801fc3');

-- --------------------------------------------------------

--
-- Table structure for table `alis`
--

CREATE TABLE IF NOT EXISTS `alis` (
`id` int(11) NOT NULL,
  `nama_alis` varchar(20) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `alis`
--

INSERT INTO `alis` (`id`, `nama_alis`) VALUES
(1, 'eb01.png'),
(2, 'eb02.png'),
(3, 'eb03.png'),
(4, 'eb04.png'),
(5, 'eb05.png'),
(6, 'eb06.png'),
(7, 'eb07.png'),
(8, 'eb08.png'),
(9, 'eb09.png'),
(10, 'eb10.png');

-- --------------------------------------------------------

--
-- Table structure for table `baju`
--

CREATE TABLE IF NOT EXISTS `baju` (
`id` int(11) NOT NULL,
  `nama_baju` varchar(20) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `baju`
--

INSERT INTO `baju` (`id`, `nama_baju`) VALUES
(1, 'cl01.png'),
(2, 'cl02.png'),
(3, 'cl03.png'),
(4, 'cl04.png'),
(5, 'cl05.png'),
(6, 'cl06.png'),
(7, 'cl07.png'),
(8, 'cl08.png'),
(9, 'cl09.png'),
(10, 'cl10.png');

-- --------------------------------------------------------

--
-- Table structure for table `celana`
--

CREATE TABLE IF NOT EXISTS `celana` (
`id` int(20) NOT NULL,
  `nama_celana` varchar(22) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `celana`
--

INSERT INTO `celana` (`id`, `nama_celana`) VALUES
(1, 'pn01.png'),
(2, 'pn02.png'),
(3, 'pn03.png'),
(4, 'pn04.png'),
(5, 'pn05.png'),
(6, 'pn06.png'),
(7, 'pn07.png'),
(8, 'pn08.png'),
(9, 'pn09.png'),
(10, 'pn10.png');

-- --------------------------------------------------------

--
-- Table structure for table `hidung`
--

CREATE TABLE IF NOT EXISTS `hidung` (
`id` int(11) NOT NULL,
  `nama_hidung` varchar(20) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hidung`
--

INSERT INTO `hidung` (`id`, `nama_hidung`) VALUES
(1, 'n01.png'),
(2, 'n02.png'),
(3, 'n03.png'),
(4, 'n04.png'),
(5, 'n05.png'),
(6, 'n06.png'),
(7, 'n07.png'),
(8, 'n08.png'),
(9, 'n09.png'),
(10, 'n10.png');

-- --------------------------------------------------------

--
-- Table structure for table `kacamata`
--

CREATE TABLE IF NOT EXISTS `kacamata` (
`id` int(11) NOT NULL,
  `nama_kacamata` varchar(20) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kacamata`
--

INSERT INTO `kacamata` (`id`, `nama_kacamata`) VALUES
(1, 'eyg01.png'),
(2, 'eyg02.png'),
(3, 'eyg03.png'),
(4, 'eyg04.png'),
(5, 'eyg05.png'),
(6, 'eyg06.png'),
(7, 'eyg07.png'),
(8, 'eyg08.png'),
(9, 'eyg09.png'),
(10, 'eyg10.png');

-- --------------------------------------------------------

--
-- Table structure for table `mata`
--

CREATE TABLE IF NOT EXISTS `mata` (
`id` int(11) NOT NULL,
  `nama_mata` varchar(20) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mata`
--

INSERT INTO `mata` (`id`, `nama_mata`) VALUES
(1, 'e01.png'),
(2, 'e02.png'),
(3, 'e03.png'),
(4, 'e04.png'),
(5, 'e05.png'),
(6, 'e06.png'),
(7, 'e07.png'),
(8, 'e08.png'),
(9, 'e09.png'),
(10, 'e10.png');

-- --------------------------------------------------------

--
-- Table structure for table `mulut`
--

CREATE TABLE IF NOT EXISTS `mulut` (
`id` int(11) NOT NULL,
  `nama_mulut` varchar(20) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mulut`
--

INSERT INTO `mulut` (`id`, `nama_mulut`) VALUES
(1, 'm01.png'),
(2, 'm02.png'),
(3, 'm03.png'),
(4, 'm04.png'),
(5, 'm05.png'),
(6, 'm06.png'),
(7, 'm07.png'),
(8, 'm08.png'),
(9, 'm09.png'),
(10, 'm10.png');

-- --------------------------------------------------------

--
-- Table structure for table `rambut`
--

CREATE TABLE IF NOT EXISTS `rambut` (
`id` int(11) NOT NULL,
  `nama_rambut` varchar(20) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rambut`
--

INSERT INTO `rambut` (`id`, `nama_rambut`) VALUES
(1, 'h01.png'),
(2, 'h02.png'),
(3, 'h03.png'),
(4, 'h04.png'),
(5, 'h05.png'),
(6, 'h06.png'),
(7, 'h07.png'),
(8, 'h08.png'),
(9, 'h09.png'),
(10, 'h10.png');

-- --------------------------------------------------------

--
-- Table structure for table `sepatu`
--

CREATE TABLE IF NOT EXISTS `sepatu` (
`id` int(15) NOT NULL,
  `nama_sepatu` varchar(20) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sepatu`
--

INSERT INTO `sepatu` (`id`, `nama_sepatu`) VALUES
(1, 'sh01.png'),
(2, 'sh02.png'),
(3, 'sh03.png'),
(4, 'sh04.png'),
(5, 'sh05.png'),
(6, 'sh06.png'),
(7, 'sh07.png'),
(8, 'sh08.png'),
(9, 'sh09.png'),
(10, 'sh10.png');

-- --------------------------------------------------------

--
-- Table structure for table `topi`
--

CREATE TABLE IF NOT EXISTS `topi` (
`id` int(11) NOT NULL,
  `nama_topi` varchar(20) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `topi`
--

INSERT INTO `topi` (`id`, `nama_topi`) VALUES
(1, 'hat01.png'),
(2, 'hat02.png'),
(3, 'hat03.png'),
(4, 'hat04.png'),
(5, 'hat05.png'),
(6, 'hat06.png'),
(7, 'hat07.png'),
(8, 'hat08.png'),
(9, 'hat09.png'),
(10, 'hat10.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `alis`
--
ALTER TABLE `alis`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `baju`
--
ALTER TABLE `baju`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `celana`
--
ALTER TABLE `celana`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hidung`
--
ALTER TABLE `hidung`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kacamata`
--
ALTER TABLE `kacamata`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mata`
--
ALTER TABLE `mata`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mulut`
--
ALTER TABLE `mulut`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rambut`
--
ALTER TABLE `rambut`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sepatu`
--
ALTER TABLE `sepatu`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `topi`
--
ALTER TABLE `topi`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `alis`
--
ALTER TABLE `alis`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `baju`
--
ALTER TABLE `baju`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `celana`
--
ALTER TABLE `celana`
MODIFY `id` int(20) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `hidung`
--
ALTER TABLE `hidung`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `kacamata`
--
ALTER TABLE `kacamata`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `mata`
--
ALTER TABLE `mata`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `mulut`
--
ALTER TABLE `mulut`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `rambut`
--
ALTER TABLE `rambut`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `sepatu`
--
ALTER TABLE `sepatu`
MODIFY `id` int(15) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `topi`
--
ALTER TABLE `topi`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
