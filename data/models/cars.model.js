const db = require('../../data/db');

function find() {
  return db('cars');
}

function findById(id) {
  return db('cars')
    .where({ id })
    .first();
}

async function add(car) {
  const payload = {
    make: car.make,
    model: car.model,
    vin: car.vin,
    mileage: car.mileage,
    transmissionType: car.transmissionType,
    titleStatus: car.titleStatus,
  };

  const [id] = await db('cars').insert(car);

  return findById(id);
}

async function update(changes, id) {
  await db('cars')
    .where({ id })
    .update(changes);

  return findById(id);
}

function remove(id) {
  return db('cars')
    .where({ id })
    .del();
}

module.exports = { find, findById, add, update, remove };
