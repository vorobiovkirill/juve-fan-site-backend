const path = require("path");

module.exports = ({ env }) => {

  if (env("NODE_ENV") === "production") {

    return {
      defaultConnection: "default",
      connections: {
        default: {
          connector: "bookshelf",
          settings: {
            client: "postgres",
            host: env("DATABASE_HOST"),
            port: env("DATABASE_PORT"),
            database: env("DATABASE_NAME"),
            username: env("DATABASE_USER"),
            password: env("DATABASE_PASS"),
            ssl: {
              rejectUnauthorized: false,
            },
          },
          options: {
            ssl: false,
          },
        },
      },
    };
  }

  return {
    connection: {
      client: "sqlite",
      connection: {
        filename: path.join(
          __dirname,
          "..",
          env("DATABASE_FILENAME", ".tmp/data.db")
        ),
      },
      useNullAsDefault: true,
    },
  };
};
