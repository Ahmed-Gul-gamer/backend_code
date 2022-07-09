CREATE DATABASE library;

CREATE TABLE student(
    std_id SERIAL,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    PRIMARY KEY(std_id)
);

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

