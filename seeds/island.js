
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Island').del()
    .then(function () {
      // Inserts seed entries
      return knex('Island').insert([
        {id: 1, name: 'North'},
        {id: 2, name: 'South'},
      
      ]);
    });
};
