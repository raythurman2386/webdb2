const carsRouter = require("express").Router();

carsRouter
  .get("/", (req, res) => {
    res.send("API is working")
  });

module.exports = carsRouter;