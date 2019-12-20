exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('cars').truncate()
  // Inserts seed entries
  await knex('cars').insert([
    { make: "Ford", model: "Ranger", vin: "da9898a7sdfalsdfadsf", mileage: 100000 },
    { make: "Honda", model: "Civic", vin: "lkjbutyygs872983742", mileage: 40, transmissionType: 'auto' },
    { make: "Chevy", model: "Silverado", vin: "lkjlhsdfap98709182734", mileage: 19000, titleStatus: "clean" },
    { make: "Dodge", model: "Ram", vin: "asdfasod79879442kh", mileage: 100000 },
    { make: "Toyota", model: "Tacoma", vin: "asdkfjasd8979879asdfas", mileage: 190000 }
  ]);
};