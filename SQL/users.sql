CREATE TABLE users (
    UserId SERIAL PRIMARY KEY,
    Username VARCHAR,
    Email VARCHAR UNIQUE,
    Password VARCHAR
);