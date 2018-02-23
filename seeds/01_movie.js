exports.seed = function(knex, Promise) {
  return knex
    .raw('ALTER SEQUENCE movie_id_seq restart with 151')
    .then(function() {
      return knex('movie')
        .del()
        .then(function() {
          return Promise.all([
            knex('movie').insert({
              id: 1,
              title: 'Toy Story',
              year: 1995
            }),
            knex('movie').insert({
              id: 2,
              title: 'Jumanji',
              year: 1995
            }),
            knex('movie').insert({
              id: 3,
              title: 'Grumpier Old Men',
              year: 1995
            }),
            knex('movie').insert({
              id: 4,
              title: 'Waiting to Exhale',
              year: 1995
            }),
            knex('movie').insert({
              id: 5,
              title: 'Father of the Bride Part II',
              year: 1995
            }),
            knex('movie').insert({
              id: 6,
              title: 'Heat',
              year: 1995
            }),
            knex('movie').insert({
              id: 7,
              title: 'Sabrina',
              year: 1995
            }),
            knex('movie').insert({
              id: 8,
              title: 'Tom and Huck',
              year: 1995
            }),
            knex('movie').insert({
              id: 9,
              title: 'Sudden Death',
              year: 1995
            }),
            knex('movie').insert({
              id: 10,
              title: 'GoldenEye',
              year: 1995
            }),
            knex('movie').insert({
              id: 11,
              title: 'American President, The',
              year: 1995
            }),
            knex('movie').insert({
              id: 12,
              title: 'Dracula: Dead and Loving It',
              year: 1995
            }),
            knex('movie').insert({
              id: 13,
              title: 'Balto',
              year: 1995
            }),
            knex('movie').insert({
              id: 14,
              title: 'Nixon',
              year: 1995
            }),
            knex('movie').insert({
              id: 15,
              title: 'Cutthroat Island',
              year: 1995
            }),
            knex('movie').insert({
              id: 16,
              title: 'Casino',
              year: 1995
            }),
            knex('movie').insert({
              id: 17,
              title: 'Sense and Sensibility',
              year: 1995
            }),
            knex('movie').insert({
              id: 18,
              title: 'Four Rooms',
              year: 1995
            }),
            knex('movie').insert({
              id: 19,
              title: 'Ace Ventura: When Nature Calls',
              year: 1995
            }),
            knex('movie').insert({
              id: 20,
              title: 'Money Train',
              year: 1995
            }),
            knex('movie').insert({
              id: 21,
              title: 'Get Shorty',
              year: 1995
            }),
            knex('movie').insert({
              id: 22,
              title: 'Copycat',
              year: 1995
            }),
            knex('movie').insert({
              id: 23,
              title: 'Assassins',
              year: 1995
            }),
            knex('movie').insert({
              id: 24,
              title: 'Powder',
              year: 1995
            }),
            knex('movie').insert({
              id: 25,
              title: 'Leaving Las Vegas',
              year: 1995
            }),
            knex('movie').insert({
              id: 26,
              title: 'Othello',
              year: 1995
            }),
            knex('movie').insert({
              id: 27,
              title: 'Now and Then',
              year: 1995
            }),
            knex('movie').insert({
              id: 28,
              title: 'Persuasion',
              year: 1995
            }),
            knex('movie').insert({
              id: 29,
              title: 'City of Lost Children, The (Cité des enfants perdus, La)',
              year: 1995
            }),
            knex('movie').insert({
              id: 30,
              title: 'Shanghai Triad (Yao a yao yao dao waipo qiao)',
              year: 1995
            }),
            knex('movie').insert({
              id: 31,
              title: 'Dangerous Minds',
              year: 1995
            }),
            knex('movie').insert({
              id: 32,
              title: 'Twelve Monkeys (a.k.a. 12 Monkeys)',
              year: 1995
            }),
            knex('movie').insert({
              id: 34,
              title: 'Babe',
              year: 1995
            }),
            knex('movie').insert({
              id: 35,
              title: 'Carrington',
              year: 1995
            }),
            knex('movie').insert({
              id: 36,
              title: 'Dead Man Walking',
              year: 1995
            }),
            knex('movie').insert({
              id: 37,
              title: 'Across the Sea of Time',
              year: 1995
            }),
            knex('movie').insert({
              id: 38,
              title: 'It Takes Two',
              year: 1995
            }),
            knex('movie').insert({
              id: 39,
              title: 'Clueless',
              year: 1995
            }),
            knex('movie').insert({
              id: 40,
              title: 'Cry, the Beloved Country',
              year: 1995
            }),
            knex('movie').insert({
              id: 41,
              title: 'Richard III',
              year: 1995
            }),
            knex('movie').insert({
              id: 42,
              title: 'Dead Presidents',
              year: 1995
            }),
            knex('movie').insert({
              id: 43,
              title: 'Restoration',
              year: 1995
            }),
            knex('movie').insert({
              id: 44,
              title: 'Mortal Kombat',
              year: 1995
            }),
            knex('movie').insert({
              id: 45,
              title: 'To Die For',
              year: 1995
            }),
            knex('movie').insert({
              id: 46,
              title: 'How to Make an American Quilt',
              year: 1995
            }),
            knex('movie').insert({
              id: 47,
              title: 'Seven (a.k.a. Se7en)',
              year: 1995
            }),
            knex('movie').insert({
              id: 48,
              title: 'Pocahontas',
              year: 1995
            }),
            knex('movie').insert({
              id: 49,
              title: 'When Night Is Falling',
              year: 1995
            }),
            knex('movie').insert({
              id: 50,
              title: 'Usual Suspects, The',
              year: 1995
            }),
            knex('movie').insert({
              id: 52,
              title: 'Mighty Aphrodite',
              year: 1995
            }),
            knex('movie').insert({
              id: 53,
              title: 'Lamerica',
              year: 1994
            }),
            knex('movie').insert({
              id: 54,
              title: 'Big Green, The',
              year: 1995
            }),
            knex('movie').insert({
              id: 55,
              title: 'Georgia',
              year: 1995
            }),
            knex('movie').insert({
              id: 57,
              title: 'Home for the Holidays',
              year: 1995
            }),
            knex('movie').insert({
              id: 58,
              title: 'Postman, The (Postino, Il)',
              year: 1994
            }),
            knex('movie').insert({
              id: 59,
              title: 'Confessional, The (Confessionnal, Le)',
              year: 1995
            }),
            knex('movie').insert({
              id: 60,
              title: 'Indian in the Cupboard, The',
              year: 1995
            }),
            knex('movie').insert({
              id: 61,
              title: 'Eye for an Eye',
              year: 1996
            }),
            knex('movie').insert({
              id: 62,
              title: "Mr. Holland's Opus",
              year: 1995
            }),
            knex('movie').insert({
              id: 63,
              title:
                "Don't Be a Menace to South Central While Drinking Your Juice in the Hood",
              year: 1996
            }),
            knex('movie').insert({
              id: 64,
              title: 'Two if by Sea',
              year: 1996
            }),
            knex('movie').insert({
              id: 65,
              title: 'Bio-Dome',
              year: 1996
            }),
            knex('movie').insert({
              id: 66,
              title: 'Lawnmower Man 2: Beyond Cyberspace',
              year: 1996
            }),
            knex('movie').insert({
              id: 68,
              title: 'French Twist (Gazon maudit)',
              year: 1995
            }),
            knex('movie').insert({
              id: 69,
              title: 'Friday',
              year: 1995
            }),
            knex('movie').insert({
              id: 70,
              title: 'From Dusk Till Dawn',
              year: 1996
            }),
            knex('movie').insert({
              id: 71,
              title: 'Fair Game',
              year: 1995
            }),
            knex('movie').insert({
              id: 72,
              title: 'Kicking and Screaming',
              year: 1995
            }),
            knex('movie').insert({
              id: 73,
              title: 'Misérables, Les',
              year: 1995
            }),
            knex('movie').insert({
              id: 74,
              title: 'Bed of Roses',
              year: 1996
            }),
            knex('movie').insert({
              id: 76,
              title: 'Screamers',
              year: 1995
            }),
            knex('movie').insert({
              id: 77,
              title: 'Nico Icon',
              year: 1995
            }),
            knex('movie').insert({
              id: 78,
              title: 'Crossing Guard, The',
              year: 1995
            }),
            knex('movie').insert({
              id: 79,
              title: 'Juror, The',
              year: 1996
            }),
            knex('movie').insert({
              id: 80,
              title: 'White Balloon, The (Badkonake sefid)',
              year: 1995
            }),
            knex('movie').insert({
              id: 81,
              title: "Things to Do in Denver When You're Dead",
              year: 1995
            }),
            knex('movie').insert({
              id: 82,
              title: "Antonia's Line (Antonia)",
              year: 1995
            }),
            knex('movie').insert({
              id: 83,
              title: 'Once Upon a Time... When We Were Colored',
              year: 1995
            }),
            knex('movie').insert({
              id: 84,
              title: 'Last Summer in the Hamptons',
              year: 1995
            }),
            knex('movie').insert({
              id: 85,
              title: 'Angels and Insects',
              year: 1995
            }),
            knex('movie').insert({
              id: 86,
              title: 'White Squall',
              year: 1996
            }),
            knex('movie').insert({
              id: 87,
              title: 'Dunston Checks In',
              year: 1996
            }),
            knex('movie').insert({
              id: 88,
              title: 'Black Sheep',
              year: 1996
            }),
            knex('movie').insert({
              id: 89,
              title: 'Nick of Time',
              year: 1995
            }),
            knex('movie').insert({
              id: 92,
              title: 'Mary Reilly',
              year: 1996
            }),
            knex('movie').insert({
              id: 93,
              title: 'Vampire in Brooklyn',
              year: 1995
            }),
            knex('movie').insert({
              id: 94,
              title: 'Beautiful Girls',
              year: 1996
            }),
            knex('movie').insert({
              id: 95,
              title: 'Broken Arrow',
              year: 1996
            }),
            knex('movie').insert({
              id: 96,
              title: 'In the Bleak Midwinter',
              year: 1995
            }),
            knex('movie').insert({
              id: 97,
              title: 'Hate (Haine, La)',
              year: 1995
            }),
            knex('movie').insert({
              id: 98,
              title: 'Shopping',
              year: 1994
            }),
            knex('movie').insert({
              id: 99,
              title: 'Heidi Fleiss: Hollywood Madam',
              year: 1995
            }),
            knex('movie').insert({
              id: 100,
              title: 'City Hall',
              year: 1996
            }),
            knex('movie').insert({
              id: 101,
              title: 'Bottle Rocket',
              year: 1996
            }),
            knex('movie').insert({
              id: 102,
              title: 'Mr. Wrong',
              year: 1996
            }),
            knex('movie').insert({
              id: 103,
              title: 'Unforgettable',
              year: 1996
            }),
            knex('movie').insert({
              id: 104,
              title: 'Happy Gilmore',
              year: 1996
            }),
            knex('movie').insert({
              id: 105,
              title: 'Bridges of Madison County, The',
              year: 1995
            }),
            knex('movie').insert({
              id: 107,
              title: 'Muppet Treasure Island',
              year: 1996
            }),
            knex('movie').insert({
              id: 108,
              title: 'Catwalk',
              year: 1996
            }),
            knex('movie').insert({
              id: 110,
              title: 'Braveheart',
              year: 1995
            }),
            knex('movie').insert({
              id: 111,
              title: 'Taxi Driver',
              year: 1976
            }),
            knex('movie').insert({
              id: 112,
              title: 'Rumble in the Bronx (Hont faan kui)',
              year: 1995
            }),
            knex('movie').insert({
              id: 113,
              title: 'Before and After',
              year: 1996
            }),
            knex('movie').insert({
              id: 114,
              title: "Margaret's Museum",
              year: 1995
            }),
            knex('movie').insert({
              id: 116,
              title: 'Anne Frank Remembered',
              year: 1995
            }),
            knex('movie').insert({
              id: 117,
              title: "Young Poisoner's Handbook, The",
              year: 1995
            }),
            knex('movie').insert({
              id: 118,
              title: 'If Lucy Fell',
              year: 1996
            }),
            knex('movie').insert({
              id: 119,
              title: 'Steal Big, Steal Little',
              year: 1995
            }),
            knex('movie').insert({
              id: 121,
              title: 'Boys of St. Vincent, The',
              year: 1992
            }),
            knex('movie').insert({
              id: 122,
              title: 'Boomerang',
              year: 1992
            }),
            knex('movie').insert({
              id: 123,
              title: 'Chungking Express (Chung Hing sam lam)',
              year: 1994
            }),
            knex('movie').insert({
              id: 124,
              title: "Star Maker, The (Uomo delle stelle, L')",
              year: 1995
            }),
            knex('movie').insert({
              id: 125,
              title: 'Flirting With Disaster',
              year: 1996
            }),
            knex('movie').insert({
              id: 126,
              title: 'NeverEnding Story III, The',
              year: 1994
            }),
            knex('movie').insert({
              id: 129,
              title: 'Pie in the Sky',
              year: 1996
            }),
            knex('movie').insert({
              id: 130,
              title: 'Angela',
              year: 1995
            }),
            knex('movie').insert({
              id: 131,
              title: 'Frankie Starlight',
              year: 1995
            }),
            knex('movie').insert({
              id: 132,
              title: 'Jade',
              year: 1995
            }),
            knex('movie').insert({
              id: 135,
              title: 'Down Periscope',
              year: 1996
            }),
            knex('movie').insert({
              id: 137,
              title: 'Man of the Year',
              year: 1995
            }),
            knex('movie').insert({
              id: 140,
              title: 'Up Close and Personal',
              year: 1996
            }),
            knex('movie').insert({
              id: 141,
              title: 'Birdcage, The',
              year: 1996
            }),
            knex('movie').insert({
              id: 144,
              title: 'Brothers McMullen, The',
              year: 1995
            }),
            knex('movie').insert({
              id: 145,
              title: 'Bad Boys',
              year: 1995
            }),
            knex('movie').insert({
              id: 146,
              title: 'Amazing Panda Adventure, The',
              year: 1995
            }),
            knex('movie').insert({
              id: 147,
              title: 'Basketball Diaries, The',
              year: 1995
            }),
            knex('movie').insert({
              id: 148,
              title: 'Awfully Big Adventure, An',
              year: 1995
            }),
            knex('movie').insert({
              id: 149,
              title: 'Amateur',
              year: 1994
            }),
            knex('movie').insert({
              id: 150,
              title: 'Apollo 13',
              year: 1995
            })
          ]);
        });
    });
};
