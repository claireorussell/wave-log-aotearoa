
exports.up = function(knex) {
  return knex.schema.createTable('Waves', (table) => {
      table.increments().primary
      table.string('name')
      table.integer('swell')
      table.integer('difficulty')
      table.string('image')
      table.string('region')
      table.string('island_id')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Waves')
  
};
