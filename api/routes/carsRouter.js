const carsRouter = require('express').Router();
const Cars = require('../../data/models/cars.model');

// GET all cars
const getCars = async (req, res, next) => {
  try {
    const cars = await Cars.find();
    return res.status(200).json(cars);
  } catch (error) {
    next(error);
  }
};

// GET car by ID
const getCarById = async (req, res, next) => {
  try {
    const car = await Cars.findById(req.params.id);
    return res.status(200).json(car);
  } catch (error) {
    next(error);
  }
};

// Create Car
const addCar = async (req, res, next) => {
  try {
    const id = await Cars.add(req.body);
    return res.status(201).json(id);
  } catch (error) {
    next(error);
  }
};

const updateCar = async (req, res, next) => {
  try {
    const id = await Cars.update(req.body, req.body.id);
    return res.status(201).json(id);
  } catch (error) {
    next(error);
  }
};

const deleteCar = async (req, res, next) => {
  try {
    const deleted = await Cars.remove(req.params.id);
    return res.status(204).json(deleted);
  } catch (error) {
    next(error);
  }
};

carsRouter
  .get('/', getCars)
  .get('/:id', getCarById)
  .post('/', addCar)
  .put('/:id', updateCar)
  .delete('/:id', deleteCar);

module.exports = carsRouter;
