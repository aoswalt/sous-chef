CREATE TABLE chef.pass (
  id          SERIAL  PRIMARY KEY,
  account_id  INTEGER REFERENCES chef.account UNIQUE,
  hash        TEXT    NOT NULL
);
