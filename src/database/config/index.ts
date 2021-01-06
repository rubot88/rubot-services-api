const dbConfig = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: "password",
    database: "sequelize",
    host: "localhost",
    dialect: "mysql",
  },
  production: {
    url: process.env.DEV_DATABASE_URL,
    dialect: "postgres",
  },
};

export default dbConfig;
