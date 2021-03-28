const express = require('express');
const questionController = require('../controllers/question.controller');

const router = express.Router();

router.post("/", questionController.save);
router.get("/:id", questionController.show);
router.get("/", questionController.index);
router.patch("/:id", questionController.update);
router.delete("/:id", questionController.destroy);

module.exports = router;