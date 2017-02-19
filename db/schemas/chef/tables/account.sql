CREATE TABLE chef.account (
  id        SERIAL  PRIMARY KEY,
  active    BOOLEAN NOT NULL DEFAULT true,
  email     TEXT    NOT NULL,
  username  TEXT    NOT NULL,
  name      TEXT
);
