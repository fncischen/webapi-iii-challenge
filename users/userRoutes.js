const userData = require("../data/helpers/userDb.js");
const express = require('express');
const router = express().Router;

router.get("/", (req,res) => {
    userData.get().then().catch();
})

router.get("/:id", (req,res) => {
    userData.getById(req.params.id).then().catch();
})

router.post("/", (req,res) => {
    userData.insert(req.body).then().catch();
})

router.put("/:id", (req,res) => {
    userData.update(req.body, req.params.id).then().catch();
})

router.delete("/:id", (req,res) => {
    userData.delete(req.body, req.params.id).then().catch();
})