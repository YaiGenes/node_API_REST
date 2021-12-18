import { config } from "dotenv";
config();

export default {
  mongodbURL: process.env.MONGO_URI,
  port: process.env.PORT,
};
