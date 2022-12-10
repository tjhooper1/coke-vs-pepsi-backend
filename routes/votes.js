const express = require("express");
const router = express.Router();
const votes = require("../controllers/votes");

router.get("/vote", votes.vote).post("/vote", votes.submitVote);

module.exports = router;
