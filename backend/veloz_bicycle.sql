-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 17, 2024 at 02:36 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `veloz_bicycle`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `nama_depan` varchar(100) NOT NULL,
  `nama_belakang` varchar(100) DEFAULT NULL,
  `no_telepon` varchar(15) NOT NULL,
  `email` varchar(255) NOT NULL,
  `pesan` text NOT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `edit_profil`
--

CREATE TABLE `edit_profil` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `perubahan` text NOT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `nama_sepeda` varchar(255) NOT NULL,
  `brand` varchar(100) DEFAULT NULL,
  `model` varchar(100) DEFAULT NULL,
  `max_load` varchar(50) DEFAULT NULL,
  `motor_power` varchar(50) DEFAULT NULL,
  `max_speed` varchar(50) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `nama_sepeda`, `brand`, `model`, `max_load`, `motor_power`, `max_speed`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Sepeda Listrik United Salvador 2.0', 'United Bike', 'UNITED Salvador 2.0', '120 kg', '600 watt', '25 km/h', '/assets/img/United Bike - UNITED Salvador 2.0.png', '2024-11-28 04:08:33', '2024-11-28 04:08:33'),
(2, 'Sepeda Listrik EXOTIC X 630', 'Pacific Bike', 'EXOTIC Sepeda Listrik | X 630', '150 kg', '500 watt', '40 km/h', '/assets/img/Pasific Bike - EXOTIC Sepeda Listrik X-630.png', '2024-11-28 04:08:33', '2024-11-28 04:08:33'),
(3, 'Sepeda Listrik Uwinfly D60', 'Uwinfly', 'Uwinfly D60', '150 kg', '450 watt', '33 km/h', '/assets/img/Uwinfly - Uwinfly D60.png', '2024-11-28 04:08:33', '2024-11-28 04:08:33'),
(4, 'Sepeda Listrik Pacific VENTURA R5', 'Pacific Bike', 'Pacific VENTURA R5', '150 kg', '550 watt', '40 km/h', '/assets/img/Pasific Bike - Pasific VENTURA R5.png', '2024-11-28 04:08:33', '2024-11-28 04:08:33'),
(5, 'Sepeda Listrik Uwinfly D7D', 'Uwinfly', 'Uwinfly D7D', '150 kg', '450 watt', '33 km/h', '/assets/img/Uwinfly - Uwinfly D7D.png', '2024-11-28 04:08:33', '2024-11-28 04:08:33'),
(6, 'Sepeda Listrik GODA ANGEL GD 111', 'GODA', 'GODA ANGEL | GD 111', '130 kg', '550 watt', '40 km/h', '/assets/img/GODA - GODA ANGEL GD 111.png', '2024-11-28 04:08:33', '2024-11-28 04:08:33');

-- --------------------------------------------------------

--
-- Table structure for table `rental`
--

CREATE TABLE `rental` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `sepeda_id` int(11) NOT NULL,
  `area` enum('Institut Teknologi Sepuluh November','Universitas Negeri Surabaya','Universitas Airlangga') NOT NULL,
  `durasi` varchar(50) NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `status` enum('proses','selesai') DEFAULT 'proses',
  `metode_pembayaran` enum('cash','transfer','Qris') NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `pekerjaan` enum('dosen','mahasiswa','pelejar','pengunjung') NOT NULL DEFAULT 'mahasiswa'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `access_secret` bigint(20) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sepeda`
--

CREATE TABLE `sepeda` (
  `id` int(11) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `maxload` varchar(255) NOT NULL,
  `motorpower` varchar(255) NOT NULL,
  `range` varchar(255) NOT NULL,
  `maxspeed` varchar(255) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `jumlah` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `isAdmin` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `refresh_token`, `createdAt`, `updatedAt`, `isAdmin`) VALUES
(55, 'veloz', 'ryu@gmail.com', '$2b$10$YoayLUOXHKLnLXvG3ewYvOMiCqUZLZrVu7DFeOxoin9i1qYhnSUzG', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjU1LCJuYW1lIjoidmVsb3oiLCJlbWFpbCI6InJ5dUBnbWFpbC5jb20iLCJpYXQiOjE3MzM1NjUwODgsImV4cCI6MTczMzY1MTQ4OH0._Plw1c5o-us5bWL6v2PWIUkHVCXG3rYfVNgrZUErzpw', '2024-12-06 05:21:11', '2024-12-07 09:51:28', 0),
(57, 'ririn', 'ririnrusmayanti35@gmail.com', '$2b$10$MCxgKnX0tH34ECA2ReAK1.4Fkq02wh5kbKbRcNz.Pj2m.BUy4efP.', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjU3LCJuYW1lIjoicmlyaW4iLCJlbWFpbCI6InJpcmlucnVzbWF5YW50aTM1QGdtYWlsLmNvbSIsImlhdCI6MTczMzQ2Njg5NywiZXhwIjoxNzMzNTUzMjk3fQ.PVnG3cKAOYmqUhCz6LISAuONKhsksPMognCd69DrK5U', '2024-12-06 05:44:50', '2024-12-06 06:34:57', 0),
(63, 'alma', 'aalmaa@gmail.com', '$2b$10$x6WwSog2.yvcah/Fv33Ee.0iHhOLyNvoF2D8ZY36D5ztq8aZnUv2i', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYzLCJuYW1lIjoiYWxtYSIsImVtYWlsIjoiYWFsbWFhQGdtYWlsLmNvbSIsImlhdCI6MTczMzU0NDQyNiwiZXhwIjoxNzMzNjMwODI2fQ.fqLp1t5f45JchCISkMKdyp2HncG9m4QxYe30C2f3ak4', '2024-12-07 04:05:06', '2024-12-07 04:07:06', 0),
(65, 'rusma', 'rus@gmail.com', '$2b$10$KlFNpgujWZpI2PevRfnDnu5gxeEwGD3u4TdCz3HKKXmafKpySoBVu', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY1LCJuYW1lIjoicnVzbWEiLCJlbWFpbCI6InJ1c0BnbWFpbC5jb20iLCJpYXQiOjE3MzM3MDc0MDQsImV4cCI6MTczMzc5MzgwNH0.xx2gUEagqA6DFHADxbaEzUt8SFmim3_NxC2slMVeeEc', '2024-12-08 22:58:23', '2024-12-09 01:23:24', 0),
(73, 'ririrus', 'rusma@gmail.com', '$2b$10$yMIhsCh3wzXHakrNecyMZO6x1KoT.5vRxcqEax4pqAgn5BFoW2z1i', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjczLCJuYW1lIjoicmlyaXJ1cyIsImVtYWlsIjoicnVzbWFAZ21haWwuY29tIiwiaWF0IjoxNzMzNzM4NzYyLCJleHAiOjE3MzM4MjUxNjJ9.ZuA7HDXwoRb389CtCpfiLNK6SXNnYv6o9uUHl7H0-kk', '2024-12-09 10:06:01', '2024-12-09 10:06:02', 0),
(75, 'ruswma', 'rusmaaas@gmail.com', '$2b$10$cx7mAl7iMaZB/u3Gp88us.07Xg00OO5s3/gxQO/ZsrdHAWZ0xsEQu', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjc1LCJuYW1lIjoicnVzd21hIiwiZW1haWwiOiJydXNtYWFhc0BnbWFpbC5jb20iLCJpYXQiOjE3MzM3NTA4NDAsImV4cCI6MTczMzgzNzI0MH0.qQb-iNGEbkXrHhwtU-k_eK3-UHRgPzZhb-oY1vgwaGs', '2024-12-09 13:27:16', '2024-12-09 13:27:20', 0),
(76, 'admin', 'admin@example.com', 'admin123', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `edit_profil`
--
ALTER TABLE `edit_profil`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rental`
--
ALTER TABLE `rental`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `sepeda_id` (`sepeda_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `access_secret` (`access_secret`);

--
-- Indexes for table `sepeda`
--
ALTER TABLE `sepeda`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `edit_profil`
--
ALTER TABLE `edit_profil`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `rental`
--
ALTER TABLE `rental`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sepeda`
--
ALTER TABLE `sepeda`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `contact`
--
ALTER TABLE `contact`
  ADD CONSTRAINT `contact_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `edit_profil`
--
ALTER TABLE `edit_profil`
  ADD CONSTRAINT `edit_profil_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `rental`
--
ALTER TABLE `rental`
  ADD CONSTRAINT `rental_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `rental_ibfk_2` FOREIGN KEY (`sepeda_id`) REFERENCES `product` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
