const express = require("express");
const app = express();
const path = require("path");

app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views/index.html")));
app.get("/projects", (req, res) => res.sendFile(path.join(__dirname, "views/projects.html")));
app.get("/projects/chatbot", (req, res) => res.sendFile(path.join(__dirname, "views/chatbot.html")));
app.get("/projects/downloader", (req, res) => res.sendFile(path.join(__dirname, "views/downloader.html")));

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
