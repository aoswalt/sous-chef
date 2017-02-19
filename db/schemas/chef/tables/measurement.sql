CREATE TABLE chef.measurement (
  id    SERIAL  PRIMARY KEY,
  label TEXT    NOT NULL UNIQUE
);
