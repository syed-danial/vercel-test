module.exports = ({ env }) => ({
  connection: {
    client: env("DATABASE_CLIENT", "mysql"),

    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "strapi"),
      user: env("DATABASE_USERNAME", "strapi"),
      password: env("DATABASE_PASSWORD", "strapi")
    },
    useNullAsDefault: true,
    debug: false,
  },
});
