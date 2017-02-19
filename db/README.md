# DataBase Design

This repository is used to store PostgreSQL database configurations, schemas, and releases.

## Folder Structure

```
configuration
| ...
schemas
| ...
| SCHEMA (e.g. chef, audit)
| | README.md (description of the schema)
| | functions
| | indexes
| | tables
| | views
| | types
| | triggers
| | data
releases
| ...
| YYYY-MM-DD_DESCRIPTION (e.g. 2017-01-02_account-audit)
| | deploy.sh (script to gather changes into deploy.sql file)
| | deploy.sql (result of running deploy.sh)
| | README.md (description of the release)
```

## Folder Purposes

The 3 top level folders are:

  * `configuration` - Stores overarching operations such as creating the database and schemas.

  * `schemas` - Stores up-to-date schema information. The direct descendants of
    this folder correspond to each schema in the database. Under each schema folder
    are folders that correspond to different types of database entities. A folder
    for a given entitiy only needs to exist if an entity for that feature is present.
    Each file contains a single sql command with the name of the created or affected entity.
    (ex: `CREATE TABLE table_name` statement in `table_name.sql`)
    The types of entity folders are listed as follows:

    * `data` - Used to store initial data to be loaded into a table via
      [`INSERT`](https://www.postgresql.org/docs/current/static/sql-insert.html)
      statements.
    * `functions` - Used to store function entities, specifically [`CREATE
      FUNCTION`](https://www.postgresql.org/docs/current/static/sql-createfunction.html)
      statements.
    * `indexes` - Used to store table indexes, specifically [`CREATE
      INDEX`](https://www.postgresql.org/docs/current/static/sql-createindex.html)
      statements.
    * `tables` - Used to store table schemas, specifically [`CREATE
      TABLE`](https://www.postgresql.org/docs/current/static/sql-createtable.html)
      statements.
    * `triggers` - Used to store table triggers, specifically [`CREATE
      TRIGGER`](https://www.postgresql.org/docs/current/static/sql-createtrigger.html)
      statements.
    * `types` - Used to store data types, specifically [`CREATE
      TYPE`](https://www.postgresql.org/docs/current/static/sql-createtype.html)
      statements.
    * `views` - Used to store view schemas, specifically [`CREATE
      VIEW`](https://www.postgresql.org/docs/current/static/sql-createview.html)
      statements.

  * `releases` - Stores releases as they are deployed. A release consists of
    folder named for the current date and a description (in the format
    `YYYY-MM-DD_DESCRIPTION`). In this folder should be a `deploy.sh` file, which
    consists of a shell script that gathers the new changes to be deployed from
    across the repository. The following is an example of what a deploy script
    would look like:

    ```
    cd ../../schemas
    cat functions/example_function_1.sql \
        functions/example_function_2.sql \
        tables/example_table_2.sql \
        tables/example_table_2.sql \
    ```

    This script should be executed and the result stored as `deploy.sql` (ex: `./deploy.sh > deploy.sql`)
    in the same folder, so that the exact SQL that was deployed can be stored for
    historical purposes.

A `README.md` should exist under each schema and release folder for infomational purposes.
