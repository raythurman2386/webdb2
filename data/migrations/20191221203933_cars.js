exports.up = function(knex) {
  return knex.schema
    .createTable("cars", cars => {
      cars.increments();
      cars.string("make").notNullable();
      cars.string("model").notNullable();
      cars.integer("mileage").notNullable();
      cars.string("vin").notNullable();
      cars.string("transmissionType");
      cars.string("titleStatus");
    })
    .createTable("sales", sales => {
      sales.increments();
      sales.integer("sales").notNullable();
      sales.integer("sale_price").notNullable();
      sales
        .integer("sales_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("cars")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("sales").dropTableIfExists("cars");
};
