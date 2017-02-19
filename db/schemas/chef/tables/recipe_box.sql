CREATE TABLE chef.recipe_box (
  id          SERIAL  PRIMARY KEY,
  account_id  INTEGER REFERENCES chef.account,
  label       TEXT    NOT NULL
);
