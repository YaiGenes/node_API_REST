import mongoose from "mongoose";
import config from "./config/config";

(async () => {
  try {
    const db = await mongoose.connect(config.mongodbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected to:", db.connection.name);
  } catch (error) {
    console.log(error.getMessage());
  }
})();
