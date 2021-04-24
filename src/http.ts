import express, { request } from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";

import "./database/index";
import { routes } from "./routes";

const app = express();
const http = createServer(app);
const io = new Server(http);

io.on("connection", (socket: Socket) => {
    console.log("Se concetou", socket.id);
});

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("View engine", "html");

app.get("/pages/client", (request, response) => {
    return response.render("html/client.html");
});

app.use(express.json());
app.use(routes);

export {http, io};
