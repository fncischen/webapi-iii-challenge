
const express = require('express');
const router = express.Router();
const userData = require("../data/helpers/userDb.js");

router.get("/", (req,res) => {
    userData.get()
    .then((users) => res.status(200).json(users))
    .catch(res.status(500).json({error: "User information cannot be retrieved"}));
})

router.get("/:id", (req,res) => {
    userData.getById(req.params.id)
    .then((id) => res.json(id))
    .catch(res.status(400).json({ message: "The post with the specified ID does not exist." }))
})

router.post("/", (req,res) => {
    userData.insert(req.body)
    .then( (user) => res.status(201).json(user))
    .catch(
        res.status(500).json({ message: "There were errors in saving your post"})
    );
})

router.put("/:id", (req,res) => {
    userData.update(req.params.id, req.body)
    .then(
        (id) => res.status(201).json(user)
    )
    .catch(
        res.status(500).json({ message: "There were errors in updating your post"})
    );
})

router.delete("/:id", (req,res) => {
    userData.delete(req.body, req.params.id)
    .then(res.sent("The item was successfully deleted"))
    .catch();
})

module.exports = router;