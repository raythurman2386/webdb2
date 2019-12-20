const carsRouter = require("express").Router();
const db = require("../../data/db");

// GET all cars
const getCars = async (req, res, next) => {
  try {
    const cars = await db("cars")
    return res.status(200).json(cars)
  } catch (error) {
    next(error)
  }
}

// GET car by ID
const getCarById = async (req, res, next) => {
  try {
    const car = await db("cars").where({ id: req.params.id });
    return res.status(200).json(car);
  } catch (error) {
    next(error)
  }
}

// Create Car
const addCar = async (req, res, next) => {
  const payload = {
    make: req.body.make,
    model: req.body.model,
    vin: req.body.vin,
    mileage: req.body.mileage,
    transmissionType: req.body.transmissionType,
    titleStatus: req.body.titleStatus
  }

  try {
    const id = await db("cars").insert(payload)
    return res.status(201).json(await db("cars").where({ id: id }))
  } catch (error) {
    next(error)
  }
}

carsRouter
  .get("/", getCars)
  .get("/:id", getCarById)
  .post("/", addCar)

module.exports = carsRouter;