var firstName = process.argv[2];
var lastName = process.argv[3];
var birth = process.argv[4];

const config = require('./knexfile.js');
const knex = require('knex')(config);

knex('famous_people').insert({first_name: firstName, last_name: lastName, birthdate: birth})
.then(console.log("added to object " + firstName + " " + lastName + " " + birth))
// knex.destroy();

// .returning('*')
// knex.insert({first_name: 'Paul', last_name: 'Redemption', birthdate: '2014-04-06'}, id).into('famous_people')
// .then(row => {console.log(row)});