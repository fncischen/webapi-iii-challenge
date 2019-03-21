
const express = require('express');
const router = express.Router();
const postData = require("../data/helpers/postDb.js");

router.get("/", (req,res) => {
    postData.get()
    .then((posts) => res.status(200).json(posts))
    .catch(() => res.status(500).json({error: "Post information cannot be retrieved"}));
})

router.get("/:id", (req,res) => {
    postData.getById(req.params.id)
    .then((id) => res.json(200).json(id))
    .catch(() => res.status(400).json({ message: "The post with the specified ID does not exist." }))
})

router.post("/", (req,res) => {
    postData.insert(req.body)
    .then( (post) => res.status(201).json(post))
    .catch(
        () => res.status(500).json({ message: "There were errors in saving your post"})
    );
})

router.put("/:id", (req,res) => {
    if(!postData.getById(req.params.id)){
        res.status(400).json({ message: "The post with the specified ID does not exist." })
    }
    else{

    postData.update(req.body, req.params.id)
    .then( (id) => res.status(201).json(id))
    .catch(
        () => res.status(500).json({ message: "There were errors in updating your post"})
    );
    }

})

router.delete("/:id", (req,res) => {
    if(!postData.getById(req.params.id)){
        res.status(400).json({ message: "The post with the specified ID does not exist." })
    }
    else{
    postData.remove(req.params.id)
    .then((id) => res.json(id))
    .catch(() => res.status(500).json({ message: "There were errors in deleting your post"}));
    }
})

module.exports = router;