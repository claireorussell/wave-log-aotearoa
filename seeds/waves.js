
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Waves').del()
    .then(function () {
      // Inserts seed entries
      return knex('Waves').insert([
        {
          id: 1, name: 'Tora', swell: 8, image: 'https://farm9.static.flickr.com/8738/17553632305_7254264f39_b.jpg', difficulty: 5, region: 'Wellington', location_id: 1, extra: ['Need a 4WD to get to the beach.', 'Great for freedom campers.', 'Rocky break!'], break: 'Left & Right',
        },
        {
          id: 2,
          name: 'Manu Bay',
          swell: 11,
          image: 'https://www.waikatonz.com/media/1296/ledt-hand-surf-break-raglan-new-zealand.jpg?anchor=center&mode=crop&width=960&height=540&rnd=131478790020000000',
          difficulty: 5,
          region: 'Waikato',
          location_id: 1,
          extra: ['Super popular local beach.', 'Mostly suited for Advanced surfers.'],
          break: 'Left',

        },
        {
          id: 3,
          name: 'Tuhuroa',
          swell: 9,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfTvCV_At6Ut9Moy4EiU_3RxyskaIqic9jBvOb9iLrpk1Zgxtw3g&s',
          difficulty: 3,
          region: 'Canterbury',
          location_id: 2,
          extra: ['You must have permission to cross land to access the bay.'],
          break: 'Left',
        },
        {
          id: 4,
          name: 'Kahutara',
          swell: 11,
          image: 'https://www.surf-forecast.com/system/images/20885/large/Kahutara_1.jpg?1558171919',
          difficulty: 5,
          region: 'Kaikoura',
          location_id: 2, 
          extra: ['Exposed reef so do your homework from the beach!', 'super limited carparking'],
          break: 'Right',
        },
            {
              id: 5,
              name: 'St Clair', 
              swell: 8, 
              image: '',
              difficulty: 3,
              region: 'Dunedin',
              location_id: 2, 
              extra: ['Popular family beach.','Lots of room for everyone!'],
              break: "Left and Right",
          },
          {
            id: 6,
            name: 'Taylors Mistake',
            swell: 9,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfTvCV_At6Ut9Moy4EiU_3RxyskaIqic9jBvOb9iLrpk1Zgxtw3g&s',
            difficulty: 3,
            region: 'Canterbury',
            location_id: 2,
            extra: ['Open bay at the start of Godley Head', 'Big carpark'],
            break: 'Left and Right',
          },
        {
          id: 7,
          name: 'Opunake',
          swell: 8,
          image: 'https://raisedwaterresearch.com/wp-content/uploads/2019/11/Opunake-Artist-Rendition.jpg',
          difficulty: 3,
          region: 'Taranaki',
          location_id: 1, 
          extra: ['Reliable surf, best in Spring and Summer.'],
          break: 'Right',
        }
      ]);
    });
};
