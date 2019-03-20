const userData = require("../data/helpers/userDb.js");
const express = require('express');
const server = express();

server.get("/", (req,res) => {
    userData.get().then().catch();
})

server.get("/:id", (req,res) => {
    userData.getById(req.params.id).then().catch();
})

server.post("/", (req,res) => {
    userData.insert(req.body).then().catch();
})

server.put("/:id", (req,res) => {
    userData.update(req.body, req.params.id).then().catch();
})

server.delete("/:id", (req,res) => {
    userData.delete(req.body, req.params.id).then().catch();
})