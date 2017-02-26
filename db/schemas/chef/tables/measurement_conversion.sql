CREATE TABLE chef.measurement_conversion (
  id                      SERIAL  PRIMARY KEY,
  source_measurement_code TEXT    REFERENCES chef.measurement(code),
  target_measurement_code TEXT    REFERENCES chef.measurement(code),
  ratio                   REAL    NOT NULL,
  CONSTRAINT source_target UNIQUE (source_measurement_code, target_measurement_code)
);
