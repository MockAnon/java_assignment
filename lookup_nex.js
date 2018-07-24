var actorName = process.argv[2];

const config = require('./knexfile.js');
const knex = require('knex')(config);

knex.from('famous_people')
.where({first_name: actorName})
.orWhere({last_name: actorName})
.asCallback(function(err, rows) {
  if (err) return console.error(err);
  console.log("Searching ...");
  output = rows;
  console.log(output);
  console.log ("Found", rows.length, "person(s) by the name", actorName + ":");

  let count = 0;
  for (var no1 in output) {
    let date = output[no1].birthdate.toISOString().slice(0, 10);
    count += 1;
    let newVar = count + ": " + output[no1].first_name + " " + output[no1].last_name + " born " + "'" + date + "'";
    console.log(newVar);
  }

  knex.destroy();

});



// .andWhere('id', '<', 200)
// .limit(10)
// .offset(x)


  // knex.select('id').from('nicknames')
    // .whereIn('nickname', _.pluck(rows, 'name'))
    // .asCallback(function(err, rows) {
    //   if (err) return console.error(err);
    //   console.log(rows);
    // });

// General Select Query
// knex('famous_people').select().asCallback(function(err, rows) {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(rows)
//   return
// })





// // We can use all standard SQL keywords such as joins and limit
// knex('famous_people')
//   // .join('actors', 'actors.movie_id', '=', 'movies.id')
//   // .select('actors.name as star', 'movies.name as movie', 'movies.year as year')
//   .limit(10)
//   .then(rows => console.log(rows))
//   .catch(err => console.log(err.message))






// client.connect((err) => {

//   if (err) {
//     console.log("if err printing");
//     return console.error("Connection Error", err);
//   }
//   else {
//     const getActorName = (actorName, callback) => {

//       let query =
//       `SELECT * FROM famous_people
//       WHERE first_name = $1::text
//       OR last_name = $1::text;`
//       ;
//       client.query(query, [actorName], (err, result) => {
//         if (err) {
//           console.log("something went wrong");

//         } else{
//           console.log("Searching ...");

//           output = result.rows;

//           console.log(result.rows);


//           console.log ("Found", result.rows.length, "person(s) by the name", actorName + ":");


//           let count = 0;
//           for (var no1 in output) {
//             let date = output[no1].birthdate.toISOString().slice(0, 10);
// ;


//             count += 1;
//             let newVar = count + ": " + output[no1].first_name + " " + output[no1].last_name + " born " + date;
//             // "'" + yr + '-' month + '-' + day "'"
//             console.log(newVar);
//           }

//         }
//         client.end();
//       })
//     }
//     getActorName(actorName, console.log);
//   }
// });




// const pg = require("pg");
// const settings = require("./settings"); // settings.json

// const client = new knex.Client({
//   user     : settings.user,
//   password : settings.password,
//   database : settings.database,
//   host     : settings.hostname,
//   port     : settings.port,
//   ssl      : settings.ssl
// });

// knex.queryBuilder();
// .select('first_name')
