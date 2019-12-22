exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("sales").truncate();
  // Inserts seed entries
  return await knex("table_name").insert([]);
};
