CREATE TABLE scripts (
    ScriptId SERIAL PRIMARY KEY,
    UserId INT REFERENCES "users"(UserId),
    S3Link VARCHAR
);