# favheroes-api
An API for Fav Heroes Assignment by Yashwanthkumar Arivazhagan, Software Internee, Tetherfi.

Database Query (in case u are using your mqsql):

-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 23, 2022 at 09:30 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `favheroes`
--

-- --------------------------------------------------------

--
-- Table structure for table `heroes`
--

CREATE DATABASE favheroes;

USE favheroes;

CREATE TABLE `heroes` (
  `name` varchar(100) NOT NULL,
  `dob` varchar(15) NOT NULL,
  `image` text NOT NULL,
  `rating` decimal(10,0) NOT NULL,
  `fans` int(11) NOT NULL,
  `universe` char(3) NOT NULL,
  `gender` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `heroes`
--

INSERT INTO `heroes` (`name`, `dob`, `image`, `rating`, `fans`, `universe`, `gender`) VALUES
('Spider-Man', '01/01/1980', '/home/yash/Desktop/FavHeroes/Assets/marvel/spiderman.jpg', '9', 201687598, 'MCU', 'M'),
('Super-Man', '1/1/1968', '/home/yash/Desktop/FavHeroes/Assets/dc/superman.jpg', '9', 185632997, 'DC', 'M'),
('Ant-Man', '1/1/1978', '/home/yash/Desktop/FavHeroes/Assets/marvel/antman.jpg', '7', 56698874, 'MCU', 'M'),
('Black-Panther', '1/1/1972', '/home/yash/Desktop/FavHeroes/Assets/marvel/blackpanther.jpg', '8', 88874523, 'MCU', 'M'),
('Black-Widow', '1/1/1968', '/home/yash/Desktop/FavHeroes/Assets/marvel/blackwidow.jpg', '7', 66981235, 'MCU', 'F'),
('Captain-America', '1/1/1960', '/home/yash/Desktop/FavHeroes/Assets/marvel/captainamerica.jpg', '9', 87752314, 'MCU', 'M'),
('Captain-Marvel', '1/1/1956', '/home/yash/Desktop/FavHeroes/Assets/marvel/captainmarvel.jpg', '6', 55478423, 'MCU', 'F'),
('Dead-Pool', '1/1/1976', '/home/yash/Desktop/FavHeroes/Assets/marvel/deadpool.jpg', '8', 98742365, 'MCU', 'M'),
('Doctor-Strange', '1/1/1956', '/home/yash/Desktop/FavHeroes/Assets/marvel/doctorstrange.jpg', '10', 102366842, 'MCU', 'M'),
('Groot', '1/1/1850', '/home/yash/Desktop/FavHeroes/Assets/marvel/groot.jpg', '7', 65248627, 'MCU', 'M'),
('Hawkeye', '1/1/1964', '/home/yash/Desktop/FavHeroes/Assets/marvel/hawkeye.jpg', '5', 45214756, 'MCU', 'M'),
('Hulk', '1/1/1958', '/home/yash/Desktop/FavHeroes/Assets/marvel/hulk.jpg', '8', 79632548, 'MCU', 'M'),
('Iron-Man', '1/1/1968', '/home/yash/Desktop/FavHeroes/Assets/marvel/ironman.jpg', '10', 252368745, 'MCU', 'M'),
('Loki', '1/1/1560', '/home/yash/Desktop/FavHeroes/Assets/marvel/loki.png', '8', 86532105, 'MCU', 'M'),
('Moon-Knight', '1/1/1986', '/home/yash/Desktop/FavHeroes/Assets/marvel/moonknight.jpg', '7', 65842357, 'MCU', 'M'),
('Shang-Chi', '1/1/1992', '/home/yash/Desktop/FavHeroes/Assets/marvel/shangchi.jpg', '8', 61023574, 'MCU', 'M'),
('Thor', '1/1/1700', '/home/yash/Desktop/FavHeroes/Assets/marvel/thor.jpg', '9', 79574213, 'MCU', 'M'),
('Vision', '1/1/2015', '/home/yash/Desktop/FavHeroes/Assets/marvel/vision.jpg', '6', 22365871, 'MCU', 'M'),
('Wanda', '1/1/1990', '/home/yash/Desktop/FavHeroes/Assets/marvel/wanda.jpg', '9', 75684235, 'MCU', 'F'),
('Wolverine', '1/1/1962', '/home/yash/Desktop/FavHeroes/Assets/marvel/wolverine.jpg', '9', 96357423, 'MCU', 'M'),
('Aqua-Man', '1/1/1986', '/home/yash/Desktop/FavHeroes/Assets/dc/aquaman.jpg', '8', 75698423, 'DC', 'M'),
('Bane', '1/1/1960', '/home/yash/Desktop/FavHeroes/Assets/dc/bane.jpg', '4', 5687469, 'DC', 'M'),
('Batman', '1/1/1915', '/home/yash/Desktop/FavHeroes/Assets/dc/batman.jpg', '10', 186357894, 'DC', 'M'),
('Black-Adam', '1/1/1945', '/home/yash/Desktop/FavHeroes/Assets/dc/blackadam.jpg', '8', 95786354, 'DC', 'M'),
('Darkseid', '1/1/1970', '/home/yash/Desktop/FavHeroes/Assets/dc/darkseid.jpg', '6', 53698745, 'DC', 'M'),
('Death-Stroke', '1/1/1980', '/home/yash/Desktop/FavHeroes/Assets/dc/deathstroke.jpg', '6', 42368575, 'DC', 'M'),
('Flash', '1/1/1995', '/home/yash/Desktop/FavHeroes/Assets/dc/flash.jpg', '8', 75698423, 'DC', 'M'),
('Green-Lantern', '1/1/1752', '/home/yash/Desktop/FavHeroes/Assets/dc/greenlatern.jpg', '7', 54758963, 'DC', 'M'),
('Harley-Quinn', '1/1/1986', '/home/yash/Desktop/FavHeroes/Assets/dc/herleyquinn.jpg', '9', 86574123, 'DC', 'F'),
('The-Joker', '1/1/1940', '/home/yash/Desktop/FavHeroes/Assets/dc/joker.jpg', '10', 235768426, 'DC', 'M'),
('Shazam', '1/1/1969', '/home/yash/Desktop/FavHeroes/Assets/dc/shazam.png', '7', 68745236, 'DC', 'M'),
('Wonder-Woman', '1/1/1625', '/home/yash/Desktop/FavHeroes/Assets/dc/wonderwoman.jpg', '10', 125468742, 'DC', 'F');
COMMIT;

This API is hosted in heroku app, the root url is https://favheroes-api.herokuapp.com.

Get All Heroes - https://favheroes-api.herokuapp.com/getallheroes/
Get All MCU Heroes - https://favheroes-api.herokuapp.com/getallmarvelheroes/
Get All DC Heroes - https://favheroes-api.herokuapp.com/getalldcheroes/
Get All Heroes Count according to the Universe - https://favheroes-api.herokuapp.com/getuniverseheroescount/
