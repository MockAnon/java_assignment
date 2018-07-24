var actorName = process.argv[2];

const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect((err) => {
  // console.log("console_initial");
  if (err) {
    console.log("if err printing");
    return console.error("Connection Error", err);
  }
  else {
    const getActorName = (actorName, callback) => {
      // console.log("console-01");
      let query =
      `SELECT * FROM famous_people
      WHERE first_name = $1::text
      OR last_name = $1::text;`
      ;
      client.query(query, [actorName], (err, result) => {
        if (err) {
          console.log("something went wrong");

        } else{
          console.log("Searching ...");

          output = result.rows;
          console.log(result.rows);


          console.log ("Found", result.rows.length, "person(s) by the name", actorName + ":");


          let count = 0;
          for (var no1 in output) {
            let date = output[no1].birthdate.toISOString().slice(0, 10);
;

            count += 1;
            let newVar = count + ": " + output[no1].first_name + " " + output[no1].last_name + " born " + date;
            console.log(newVar);
          }

                      // + result.rows + result.id[3], result.first_name, result.last_name, result.birthdate);

// .substring(0,10)



          // for()


        }
        client.end();
      })
    }
    getActorName(actorName, console.log);
  }
});





//   client.query(query, [actorName], (err, result)  => {
//     if (err) {
//       console.error("Something went wrong", err);
//       // callback([]);
//     }
//     else {
//       // const getActorName = (actorName, callback) => {
//       // return callback(result.rows);
//       console.log("this is printing");
//       return result.rows;
//     // }
//   }
// });
//     const getActorName = (actorName, callback) => {
//     // console.log(result.rows[0].number); //output: 1
//     return callback(result.rows);
//   }

    // console.log("error");


// const getActorName = (actorName, callback) => {
//   let query =
//   `SELECT * FROM famous_people
//   WHERE first_name = $1::text
//   OR last_name = $1::text;`
// ;

//   client.query(query, [actorName], (err, result) => {
//     if (err) {
//       console.log("Something went wrong:", err);
//       callback([]);
//     }
//     else {
//       callback(result.rows);
//     }
//   });
// }

// getActorName(actorName, console.log);









// client.connect((err) => {
//   if (err) {
//     return console.error("Connection Error", err);
//   }
//   client.query("SELECT $1::int AS number", ["1"], (err, result) => {
//     let query =
//     `SELECT * FROM famous_people
//     WHERE first_name = $1::text
//     OR last_name = $1::text;`
//     ;
//       client.query(query, [actorName], (err, result) => {
//     if (err) {
//       console.log("Something went wrong:", err);
//       callback([]);
//     }
//     else {
//       callback(result.rows);
//     }
//   });

//     if (err) {
//       return console.error("error running query", err);
//     }
//     console.log(result.rows[0].number); //output: 1
//     client.end();
//   });
// }); ///add code into here






// const getActorName = (actorName, callback) => {
//   let query =
//   `SELECT * FROM famous_people
//   WHERE first_name = $1::text
//   OR last_name = $1::text;`
// ;

//   client.query(query, [actorName], (err, result) => {
//     if (err) {
//       console.log("Something went wrong:", err);
//       callback([]);
//     }
//     else {
//       callback(result.rows);
//     }
//   });
// }

// getActorName(actorName, console.log);