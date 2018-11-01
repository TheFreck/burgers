DROP database IF EXISTS burgers_db;
CREATE database burgers_db

USE burgers_db;

CREATE TABLE burgers
(
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(30),
    devoured BOOL
)