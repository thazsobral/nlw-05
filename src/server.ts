import express, { request, response } from "express";

const app = express();

app.get("/", (request, response) => {
    return response.json({
        message: "Hello NLW#5"
    });
})

app.post("/", (request, response) => {
    return response.json({
        message: "Accept input"
    });
})

app.listen(3000, () => console.log("Server is running on port 3000"));