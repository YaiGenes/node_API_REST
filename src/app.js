import express from "express";
import morgan from "morgan";
import cors from "cors";
import config from "./config/config.js";
import TasksRoutes from "./routes/tasks.routes.js";

//app is for server settings

const app = express();

//SETTINGS
app.set("port", config.port || 3000);

//MIDDLEWARES
app.use(morgan("dev"));
app.use(express.json());
//for html form req
app.use(express.urlencoded({ extended: false }));
//to allow any other user to access this server
app.use(cors());

//ROUTES
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my GenesAPI" });
});

app.use("/api/tasks", TasksRoutes);

export default app;
