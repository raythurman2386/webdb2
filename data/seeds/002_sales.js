exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("sales").truncate();
  // Inserts seed entries
  return await knex("sales").insert([
    { sales: 1, sale_price: 10000, car_id: 1 }
  ]);
};
