-- Your SQL goes here
CREATE TABLE users (
    email VARCHAR NOT NULL,
    username VARCHAR NOT NULL PRIMARY KEY,
    password VARCHAR NOT NULL,
    telephone VARCHAR NOT NULL,
    groups VARCHAR NOT NULL,
    plans VARCHAR NOT NULL,
    photo VARCHAR NOT NULL
)