DROP database IF EXISTS burgers_db;
CREATE database burgers_db;

USE burgers_db;

CREATE TABLE IF NOT EXISTS burgers
(
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOL NOT NULL DEFAULT false,
    PRIMARY KEY(id)
);