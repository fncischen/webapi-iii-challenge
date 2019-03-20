const postData = require("../data/helpers/postDb.js");
const express = require('express');
const router = express().Router;

router.get("/", (req,res) => {
    postData.get().then().catch();
})

router.get("/:id", (req,res) => {
    postData.getById(req.params.id).then().catch();
})

router.post("/", (req,res) => {
    postData.insert(req.body).then().catch();
})

router.put("/:id", (req,res) => {
    postData.update(req.body, req.params.id).then().catch();
})

router.delete("/:id", (req,res) => {
    postData.delete(req.body, req.params.id).then().catch();
})