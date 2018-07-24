module.exports = {
  client: 'pg',
  // connection: 'postgres://stoshfabricius@localhost:5432/oscars'
  connection: {
  "user": "development",
  "password": "development",
  "database": "test_db",
  "hostname": "localhost",
  "port": 5432,
  "ssl": true
  }
};