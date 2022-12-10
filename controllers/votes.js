const vote = (req, res) => {
  res.send("hit the voting apisss");
};

const submitVote = (req, res) => {
  //   console log the incoming request
  console.log(req.body);
  res.send("hit the voting apisss");
};

// export the vote function
module.exports = {
  vote,
  submitVote,
};
