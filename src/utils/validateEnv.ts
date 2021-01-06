import { cleanEnv, port, str } from "envalid";

function validateEnv() {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    PORT: port(),
    DEV_DATABASE_URL: str(),
    JWT_SECRET: str(),
  });
}

export default validateEnv;
