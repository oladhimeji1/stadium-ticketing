-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 14, 2023 at 09:47 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stadiumdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `buy_ticket`
--

CREATE TABLE `buy_ticket` (
  `Ticket_ID` varchar(200) NOT NULL,
  `Name` varchar(200) NOT NULL,
  `Seat_type` varchar(200) NOT NULL,
  `Price` varchar(200) NOT NULL,
  `Matchx` varchar(200) NOT NULL,
  `Day` varchar(200) NOT NULL,
  `Time` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `buy_ticket`
--

INSERT INTO `buy_ticket` (`Ticket_ID`, `Name`, `Seat_type`, `Price`, `Matchx`, `Day`, `Time`) VALUES
('STA/651', 'temidayoafote@gmail.com', 'regular', '300', 'DVD vs CSV', '12/12/2023', '4:00 pm');

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `fullname` varchar(35) NOT NULL,
  `email` varchar(35) NOT NULL,
  `phone` varchar(35) NOT NULL,
  `address` varchar(35) NOT NULL,
  `fav` varchar(35) NOT NULL,
  `password` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`fullname`, `email`, `phone`, `address`, `fav`, `password`) VALUES
('Osiako Afote', 'temidayoafote@gmail.com', '09153178771', 'Apamsede', 'football', '11111');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `buy_ticket`
--
ALTER TABLE `buy_ticket`
  ADD PRIMARY KEY (`Ticket_ID`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
