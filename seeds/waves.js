
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Waves').del()
    .then(function () {
      // Inserts seed entries
      return knex('Waves').insert([
        {id: 1, name: 'Tora', swell: 6, image: 'https://farm9.static.flickr.com/8738/17553632305_7254264f39_b.jpg', difficulty: 3, region: 'Wellington', location_id: 1},
        {
                  id: 2,
                  name: 'Manu Bay', 
                  swell: 7, 
                  image: 'https://www.waikatonz.com/media/1296/ledt-hand-surf-break-raglan-new-zealand.jpg?anchor=center&mode=crop&width=960&height=540&rnd=131478790020000000',
                  difficulty: 5,
                  region: 'Waikato',
                  location_id:1
              },
              {
                id: 3,
                name: 'Taylors Mistake', 
                swell: 5, 
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfTvCV_At6Ut9Moy4EiU_3RxyskaIqic9jBvOb9iLrpk1Zgxtw3g&s',
                difficulty: 3,
                region: 'Canterbury',
                location_id: 2
            }
      ]);
    });
};
