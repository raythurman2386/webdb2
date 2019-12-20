const carsRouter = require("express").Router();
const db = require("../../data/db");

carsRouter
  .get("/", (req, res) => {
    res.send("API is working")
  });

module.exports = carsRouter;