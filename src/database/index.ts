import Sequelize from "sequelize";
import config from "./config";
import { logger } from "../utils/logger";
import UserModel from "../models/users.model";

const env = process.env.NODE_ENV || "development";
const sequelize = new Sequelize.Sequelize(config[env].url, {
  dialect: config[env].dialect,
  logQueryParameters: env === "development",
  logging: (query, time) => {
    logger.info(time + "ms" + " " + query);
  },
  benchmark: true,
});

sequelize
  .authenticate()
  .then(() => {
    logger.info("🟢 The database is connected.");
  })
  .catch((error: Error) => {
    logger.error(`🔴 Unable to connect to the database: ${error}.`);
  });

const DB = {
  Users: UserModel(sequelize),
  sequelize, // connection instance (RAW queries)
  Sequelize, // library
};

export default DB;
