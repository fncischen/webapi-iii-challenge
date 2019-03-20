const postData = require("../data/helpers/postDb.js");
const express = require('express');
const server = express();

server.get("/api/posts", (req,res) => {
    postData.get().then().catch();
})

server.get("/api/posts:id", (req,res) => {
    postData.getById(req.params.id).then().catch();
})

server.post("/api/posts", (req,res) => {
    postData.insert(req.body).then().catch();
})

server.put("/api/posts:id", (req,res) => {
    postData.update(req.body, req.params.id).then().catch();
})

server.delete("/api/posts:id", (req,res) => {
    postData.delete(req.body, req.params.id).then().catch();
})