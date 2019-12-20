const carsRouter = require("express").Router();
const db = require("../../data/db");

// GET all cars
const getCars = async (req, res, next) => {
  try {
    const cars = db("cars").select();
    return res.status(200).json(cars)
  } catch (error) {
    next(error)
  }
}

// GET car by ID
const getCarById = async (req, res, next) => {
  try {

  } catch (error) {
    next(error)
  }
}

// Create Car
const addCar = async (req, res, next) => {
  try {

  } catch (error) {
    next(error)
  }
}

carsRouter
  .get("/", (req, res) => {
    res.send("API is working")
  });

module.exports = carsRouter;