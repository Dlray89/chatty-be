// Update with your config settings.
require("dotenv").config();
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: '127.0.0.1',
      port:'5432',
      db: "postgres",
      user: "postgres",
      password: "1234",
    },
    searchPath: ['knex', 'public'],
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
  production: {
    client: "pg",
    connection: {
      db: "postgres",
      user: "postgres",
      password: "1234",
    },
    searchPath: ['knex', 'public'],
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
  testing: {
    client: "pg",
    useNullAsDefault: true,
    connection: {
      filename: "./data/auth.db3",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
};
