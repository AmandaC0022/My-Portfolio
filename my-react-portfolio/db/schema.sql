DROP DATABASE IF EXISTS portfolio_db; 
CREATE DATABASE portfolio_db; 

USE portfolio_db;

CREATE TABLE project (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL, 
  url VARCHAR(200) NOT NULL, 
  role VARCHAR(1000) NOT NULL, 
  framework VARCHAR(1000) NOT NULL, 
  description VARCHAR(2000), 
  imagepath VARCHAR(1000), 
  sortorder int NOT NULL 
);
