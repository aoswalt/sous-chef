CREATE TABLE chef.recipe_tags (
  id        SERIAL  PRIMARY KEY,
  recipe_id INTEGER REFERENCES chef.recipe,
  tag_id    INTEGER REFERENCES chef.tag,
  active    BOOLEAN NOT NULL DEFAULT true,
  CONSTRAINT recipe_tag UNIQUE (recipe_id, tag_id)
);
