// an express server
const express = require("express");
const app = express();
const port = 3000;
const { sequelize } = require("./models");

// middleware
app.use(express.json());

// using routes
const votesRouter = require("./routes/votes");
app.use("/api", votesRouter);

// start the server
app.listen(port, async () => {
  console.log(`Example app listening on port!`);
  await sequelize.sync({ force: true });
});
