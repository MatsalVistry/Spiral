CREATE TABLE scripts (
    ScriptId SERIAL PRIMARY KEY,
    UserId INT REFERENCES "users"(UserId),
    Title VARCHAR,
    last_modified TIMESTAMP
);