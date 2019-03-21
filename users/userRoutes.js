
const express = require('express');
const router = express.Router();
const userData = require("../data/helpers/userDb.js");

router.get("/", (req,res) => {
    userData.get()
    .then((users) => res.status(200).json(users))
    .catch(() => res.status(500).json({error: "User information cannot be retrieved"}));
})

router.get("/:id", (req,res) => {
    userData.getById(req.params.id)
    .then((id) => res.json(200).json(id))
    .catch(() => res.status(400).json({ message: "The user with the specified ID does not exist." }))
})

router.post("/", (req,res) => {
    userData.insert(req.body)
    .then( (user) => res.status(201).json(user))
    .catch(
        () => res.status(500).json({ message: "There were errors in adding a user"})
    );
})

router.put("/:id", (req,res) => {
    if(!userData.getById(req.params.id)) {
        res.status(400).json({ message: "The user with the specified ID does not exist." });
    }
    else {
        userData.update(req.params.id, req.body)
        .then(
            (id) => res.status(201).json(user)
        )
        .catch(
            () => res.status(500).json({ message: "There were errors in updating your user"})
    );
    }
})

router.delete("/:id", (req,res) => {
    if(!userData.getById(req.params.id)) {
        res.status(400).json({ message: "The user with the specified ID does not exist." });
    }
    else {
    userData.remove(req.params.id)
    .then((id) => res.json(id))
    .catch(() => res.status(500).json({ message: "There were errors in deleting your post"}));
    }
})

module.exports = router;