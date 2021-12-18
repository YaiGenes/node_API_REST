import express from "express";
import TasksRoutes from "./routes/tasks.routes.js";
import morgan from "morgan";
import cors from "cors";
import config from "./config/config.js";

//app is for server settings

const app = express();

//settings
app.set("port", config.port || 3000);

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my application" });
});

app.use("/api/tasks", TasksRoutes);

export default app;
