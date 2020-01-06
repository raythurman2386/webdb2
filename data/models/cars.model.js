const db = require('../../data/db');

function find() {
  return db('cars');
}

function findById(id) {
  return db('cars')
    .where({ id })
    .first();
}

function add(user) {}

function update(changes, id) {}

function remove(id) {}

module.exports = { find, findById, add, update, remove };
