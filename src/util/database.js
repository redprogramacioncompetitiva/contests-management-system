const { Pool } = require('pg')


let db;

if (!db) {
  db = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'PI1',
    password: 'password',
    port: "5432"
  })
}


export default db;