import express, { json, request, response } from "express";
import "./database/index";
import { routes } from "./routes";

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log("Server is running on port 3000"));
