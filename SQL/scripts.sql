CREATE TABLE scripts (
    ScriptId SERIAL PRIMARY KEY,
    UserId INT REFERENCES "users"(UserId),
    Title VARCHAR,
    S3Link VARCHAR
);