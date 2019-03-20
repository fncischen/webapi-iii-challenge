const userData = require("../data/helpers/userDb.js");
const express = require('express');
const server = express();

server.get("/api/users", (req,res) => {
    userData.get().then().catch();
})

server.get("/api/users:id", (req,res) => {
    userData.getById(req.params.id).then().catch();
})

server.post("/api/users", (req,res) => {
    userData.insert(req.body).then().catch();
})

server.put("/api/users:id", (req,res) => {
    userData.update(req.body, req.params.id).then().catch();
})

server.delete("/api/users:id", (req,res) => {
    userData.delete(req.body, req.params.id).then().catch();
})