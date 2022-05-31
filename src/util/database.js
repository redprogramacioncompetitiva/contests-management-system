const { Pool } = require('pg')

var db;

if (!db){
  db = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'PI1',
    password: 'mysecretpassword',

    port: 5432
  })
}

export default db;