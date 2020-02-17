exports.up = function(knex) {
    return knex.schema.table('Waves', (table) => {
        table.string('extra')
        table.string('break')
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropColumn('Waves')
  };