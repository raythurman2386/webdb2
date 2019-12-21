
exports.up = async function (knex) {
  await knex.schema.createTable("cars", table => {
    // unique primary key
    table.increments("id");
    // required make
    table.string("make", 128).notNull();
    // required model
    table.string("model", 128).notNull();
    // require vin
    table.string("vin", 128).notNull().unique();
    // required mileage
    table.integer("mileage").notNull();
    // trans type not required
    table.string("transmissionType", 128);
    // title status not required
    table.string("titleStatus", 128);
  })
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("cars");
};
