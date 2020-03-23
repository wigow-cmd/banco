module.exports = {
  test: {
    client: "pg",
    version: "9.6",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "191225",
      database: "barriga"
    },
    migrations: {
      directory: "src/migrations"
    },
    seeds: {
      directory: "src/seeds"
    }
  },
  prod: {
    client: "pg",
    version: "9.6",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "191225",
      database: "banco"
    },
    migrations: {
      directory: "src/migrations"
    }
  }
};
