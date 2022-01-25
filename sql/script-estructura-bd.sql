-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema GoService
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema GoService
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `GoService` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `GoService` ;

-- -----------------------------------------------------
-- Table `GoService`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GoService`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `GoService`.`gogers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GoService`.`gogers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fullName` VARCHAR(45) NOT NULL,
  `description` LONGTEXT NOT NULL,
  `price` FLOAT NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `experience` INT NOT NULL,
  `categories_id` INT NOT NULL,
  PRIMARY KEY (`id`, `categories_id`),
  INDEX `fk_gogers_categories_idx` (`categories_id` ASC) VISIBLE,
  CONSTRAINT `fk_gogers_categories`
    FOREIGN KEY (`categories_id`)
    REFERENCES `GoService`.`categories` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `GoService`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GoService`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `avatar` VARCHAR(255) NULL DEFAULT NULL,
  `rol` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `GoService`.`shopping`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GoService`.`shopping` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `users_id` INT NOT NULL,
  `gogers_id` INT NOT NULL,
  PRIMARY KEY (`id`, `users_id`, `gogers_id`),
  INDEX `fk_shopping_users1_idx` (`users_id` ASC) VISIBLE,
  INDEX `fk_shopping_gogers1_idx` (`gogers_id` ASC) VISIBLE,
  CONSTRAINT `fk_shopping_gogers1`
    FOREIGN KEY (`gogers_id`)
    REFERENCES `GoService`.`gogers` (`id`),
  CONSTRAINT `fk_shopping_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `GoService`.`users` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;