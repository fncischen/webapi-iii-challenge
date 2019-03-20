const postData = require("../data/helpers/postDb.js");
const express = require('express');
const server = express();

server.get("/", (req,res) => {
    postData.get().then().catch();
})

server.get("/:id", (req,res) => {
    postData.getById(req.params.id).then().catch();
})

server.post("/", (req,res) => {
    postData.insert(req.body).then().catch();
})

server.put("/:id", (req,res) => {
    postData.update(req.body, req.params.id).then().catch();
})

server.delete("/:id", (req,res) => {
    postData.delete(req.body, req.params.id).then().catch();
})