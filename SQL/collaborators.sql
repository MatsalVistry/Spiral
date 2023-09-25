CREATE TABLE collaborators (
    CollaboratorId SERIAL PRIMARY KEY,
    UserId INT REFERENCES "users"(UserId),
    ScriptId INT REFERENCES "scripts"(ScriptId)
);