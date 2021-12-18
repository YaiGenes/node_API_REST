import app from "./app";
import "./database.js";

//index is to run the app

app.listen(app.get("port"));
console.log("Server on port", app.get("port"));
