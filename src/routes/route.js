const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController=require("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.post("/createPublisher",publisherController.createPublisher)
router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )
router.get("/getBooks", bookController.getB)
router.put("/a",bookController.new)
router.put("/b",bookController.greater)

module.exports = router;