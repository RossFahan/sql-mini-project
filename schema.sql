DROP DATABASE IF EXISTS movie_db;
CREATE DATABASE movie_db;

USE movie_db;

CREATE TABLE movie_names(
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    names VARCHAR(100)
);

CREATE TABLE reviews(
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    movie_key INT,
    reviews TEXT,
    FOREIGN KEY (movie_key)
    REFERENCES movie_names(id)
    ON DELETE SET NULL
);