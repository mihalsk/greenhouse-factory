-- --------------------------------------------------------
-- Хост:                         127.0.0.1
-- Версия сервера:               8.0.33 - MySQL Community Server - GPL
-- Операционная система:         Win64
-- HeidiSQL Версия:              12.4.0.6659
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Дамп структуры базы данных zgtdb
CREATE DATABASE IF NOT EXISTS `zgtdb` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `zgtdb`;

-- Дамп структуры для таблица zgtdb.cities
CREATE TABLE IF NOT EXISTS `cities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `coords` varchar(255) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_active` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;

-- Дамп данных таблицы zgtdb.cities: ~6 rows (приблизительно)
INSERT INTO `cities` (`id`, `name`, `phone`, `coords`, `created`, `updated`, `is_active`) VALUES
	(1, 'Москва', '+7(495)123-45-67', '55.7558° N , 37.6173° E', '2023-04-24 13:55:10', '2023-04-24 13:55:10', 1),
	(2, 'Санкт-Петербург', '+7(812)123-45-67', '59.9343° N , 30.3351° E', '2023-04-24 13:55:10', '2023-04-24 13:55:10', 1),
	(3, 'Новосибирск', '+7(383)123-45-67', '55.0084° N , 82.9357° E', '2023-04-24 13:55:10', '2023-04-24 13:55:10', 1),
	(4, 'Екатеринбург', '+7(343)123-45-67', '56.8389° N , 60.6057° E', '2023-04-24 13:55:10', '2023-04-24 13:55:10', 1),
	(5, 'Нижний Новгород', '+7(831)123-45-67', '56.2965° N , 43.9361° E', '2023-04-24 13:55:10', '2023-04-24 13:55:10', 1),
	(6, 'Казань', ' +7(843)123-45-67', '55.8304° N , 49.0661° E', '2023-04-24 13:55:10', '2023-04-24 13:55:10', 1);

-- Дамп структуры для таблица zgtdb.goods
CREATE TABLE IF NOT EXISTS `goods` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `count` int NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_active` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;

-- Дамп данных таблицы zgtdb.goods: ~6 rows (приблизительно)
INSERT INTO `goods` (`id`, `name`, `price`, `photo`, `count`, `created`, `updated`, `is_active`) VALUES
	(1, 'Шуруп', 0.50, 'T-crab.jpg', 1000, '2023-04-24 13:55:10', '2023-04-24 13:55:10', 1),
	(2, 'Гвоздь', 0.25, 'T-crab-2.jpg', 5000, '2023-04-24 13:55:10', '2023-04-24 13:55:10', 1),
	(3, 'Болт', 1.00, 'T-crab-1.jpg', 2000, '2023-04-24 13:55:11', '2023-04-24 13:55:11', 1),
	(4, 'Шайба', 0.10, 'T-crab-3.jpg', 3000, '2023-04-24 13:55:11', '2023-04-24 13:55:11', 1),
	(5, 'Дюбель', 0.75, 'dowel.jpg', 1000, '2023-04-24 13:55:11', '2023-04-24 13:55:11', 1),
	(6, 'Уголок металлический', 2.00, 'corner.jpg', 500, '2023-04-24 13:55:11', '2023-04-24 13:55:11', 1);

-- Дамп структуры для таблица zgtdb.reviews
CREATE TABLE IF NOT EXISTS `reviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Author_name` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `photo` varchar(255) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_active` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

-- Дамп данных таблицы zgtdb.reviews: ~3 rows (приблизительно)
INSERT INTO `reviews` (`id`, `Author_name`, `text`, `photo`, `created`, `updated`, `is_active`) VALUES
	(1, 'Василий', 'Купили теплицу на этом заводе. Очень довольны качеством и ценой. Спасибо!', 'ellipse-1@2x.png', '2023-04-24 13:55:11', '2023-04-24 13:55:11', 1),
	(2, 'Анна', 'Заказывали установку теплицы на даче. Работа выполнена быстро и качественно.', 'ellipse-1-1@2x.png', '2023-04-24 13:55:11', '2023-04-24 13:55:11', 1),
	(3, 'Егор', 'Приобрели теплицу для дачи на этом заводе. Консультанты помогли выбрать подходящую модель и ответили на все вопросы.', 'ellipse-1-2@2x.png', '2023-04-24 13:55:11', '2023-04-24 13:55:11', 1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
