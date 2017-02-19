CREATE TABLE chef.measurement_conversion (
  id                    SERIAL  PRIMARY KEY,
  source_measurement_id INTEGER REFERENCES chef.measurement,
  target_measurement_id INTEGER REFERENCES chef.measurement,
  ratio                 REAL    NOT NULL,
  CONSTRAINT source_target UNIQUE (source_measurement_id, target_measurement_id)
);
