CREATE TABLE chef.recipe_box_recipes (
  id            SERIAL  PRIMARY KEY,
  recipe_box_id INTEGER REFERENCES chef.recipe_box,
  recipe_id     INTEGER REFERENCES chef.recipe,
  active        BOOLEAN NOT NULL DEFAULT true,
  CONSTRAINT recipe_box_recipe UNIQUE (recipe_box_id, recipe_id)
);
