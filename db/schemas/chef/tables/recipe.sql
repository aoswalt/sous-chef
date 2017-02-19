CREATE TABLE chef.recipe (
  id          SERIAL  PRIMARY KEY,
  account_id  INTEGER REFERENCES chef.account,
  data        JSONB   NOT NULL
);
