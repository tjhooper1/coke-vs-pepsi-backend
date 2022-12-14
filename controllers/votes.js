const vote = require("../models/vote");
const { sequelize, Vote } = require("../models");

const getVotes = async (req, res) => {
  const totalVotes = await Vote.get.totalVotes();
  res.status(200).json({ totalVotes });
};
const submitVote = async (req, res) => {
  //   console log the incoming request
  const { vote } = req.body;
  const newVote = await Vote.create({ vote });
  res.status(201).json({ newVote });
};

// export the vote function
module.exports = {
  getVotes,
  submitVote,
};
