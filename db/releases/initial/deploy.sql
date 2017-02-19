CREATE SCHEMA chef;
CREATE TABLE chef.account (
  id        SERIAL  PRIMARY KEY,
  active    BOOLEAN NOT NULL DEFAULT true,
  email     TEXT    NOT NULL,
  username  TEXT    NOT NULL,
  name      TEXT
);
CREATE TABLE chef.pass (
  id          SERIAL  PRIMARY KEY,
  account_id  INTEGER REFERENCES chef.account UNIQUE,
  hash        TEXT    NOT NULL
);
CREATE TABLE chef.recipe (
  id          SERIAL  PRIMARY KEY,
  account_id  INTEGER REFERENCES chef.account,
  data        JSONB   NOT NULL
);
CREATE TABLE chef.recipe_box (
  id          SERIAL  PRIMARY KEY,
  account_id  INTEGER REFERENCES chef.account,
  label       TEXT    NOT NULL
);
CREATE TABLE chef.recipe_box_recipes (
  id            SERIAL  PRIMARY KEY,
  recipe_box_id INTEGER REFERENCES chef.recipe_box,
  recipe_id     INTEGER REFERENCES chef.recipe,
  active        BOOLEAN NOT NULL DEFAULT true,
  CONSTRAINT recipe_box_recipe UNIQUE (recipe_box_id, recipe_id)
);
CREATE TABLE chef.tag (
  id    SERIAL  PRIMARY KEY,
  label TEXT    NOT NULL
);
CREATE TABLE chef.recipe_tags (
  id        SERIAL  PRIMARY KEY,
  recipe_id INTEGER REFERENCES chef.recipe,
  tag_id    INTEGER REFERENCES chef.tag,
  active    BOOLEAN NOT NULL DEFAULT true,
  CONSTRAINT recipe_tag UNIQUE (recipe_id, tag_id)
);
CREATE TABLE chef.measurement (
  id    SERIAL  PRIMARY KEY,
  code  TEXT    NOT NULL UNIQUE,
  label TEXT    NOT NULL UNIQUE
);
CREATE TABLE chef.measurement_conversion (
  id                    SERIAL  PRIMARY KEY,
  source_measurement_id INTEGER REFERENCES chef.measurement,
  target_measurement_id INTEGER REFERENCES chef.measurement,
  ratio                 REAL    NOT NULL,
  CONSTRAINT source_target UNIQUE (source_measurement_id, target_measurement_id)
);
