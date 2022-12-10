// an express server
const express = require("express");
const app = express();
const port = 3000;

// middleware
app.use(express.json());

// using routes
const votesRouter = require("./routes/votes");
app.use("/api", votesRouter);

// start the server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
