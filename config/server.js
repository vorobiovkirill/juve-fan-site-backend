module.exports = ({ env }) => {
  if (env("NODE_ENV") === "production") {
    return {
      url: env("MY_HEROKU_URL"),
    };
  }

  return {
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 1337),
    app: {
      keys: env.array("APP_KEYS"),
    },
  };
};
