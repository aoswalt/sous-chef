CREATE TABLE chef.measurement (
  id    SERIAL  PRIMARY KEY,
  code  TEXT    NOT NULL UNIQUE,
  label TEXT    NOT NULL UNIQUE
);
