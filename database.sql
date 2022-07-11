CREATE DATABASE library;
--created DB

\c library
--Connect to DB

CREATE TABLE student(
    std_id SERIAL,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    PRIMARY KEY(std_id)
);
--Created a table named student

CREATE TABLE books(
    book_id SERIAL,
    book_name VARCHAR(20) NOT NULL,
    author VARCHAR(20) NOT NULL,
    borrowed_by INT DEFAULT NULL,
    date_of_borrow date DEFAULT NULL,
    date_of_return date DEFAULT NULL,
    PRIMARY KEY(book_id),
    FOREIGN KEY(borrowed_by) REFERENCES student(std_id)
);
--Created a table named books

--Now inserting data into each table
INSERT INTO student(first_name, last_name)
VALUES ("Mike", "Tyson");

INSERT INTO student(first_name, last_name)
VALUES ("Jordan", "Peterson");

INSERT INTO student(first_name, last_name)
VALUES ("Ron", "Wesley");

INSERT INTO student(first_name, last_name)
VALUES ("Paulo", "Dybala");

INSERT INTO student(first_name, last_name)
VALUES ("John", "Martin");

INSERT INTO student(first_name, last_name)
VALUES ("Waseem", "Badami");

INSERT INTO student(first_name, last_name)
VALUES ("Kevin", "Hart");

INSERT INTO student(first_name, last_name)
VALUES ("Violet", "Evergarden");

INSERT INTO student(first_name, last_name)
VALUES ("Susan", "Ross");

INSERT INTO student(first_name, last_name)
VALUES ("Emma", "Watson");

INSERT INTO books(book_name, author)
VALUES ("The Great Gatsby", "F.Scott Fitzgerald");

INSERT INTO books(book_name, author)
VALUES ("12 Rules for Life", "Jordan Peterson");

INSERT INTO books(book_name, author)
VALUES ("Anna Karenina", "Tolstoy");

INSERT INTO books(book_name, author)
VALUES ("The Shining", "Stephen King");

INSERT INTO books(book_name, author)
VALUES ("The Little Prince", "Autoine de Saint");

INSERT INTO books(book_name, author)
VALUES ("Berserk", "Kentaro Miura");

INSERT INTO books(book_name, author)
VALUES ("Demon Slayer", "Koyoharu Gotouge");

INSERT INTO books(book_name, author)
VALUES ("Avatar", "James Cameron");

INSERT INTO books(book_name, author)
VALUES ("Captain Marvel", "Stan Lee");

INSERT INTO books(book_name, author)
VALUES ("The Darkknight", "Geoff Johns");





