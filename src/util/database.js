const { Pool } = require('pg')


let db;

if (!db) {
  db = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'PI1',
    password: '15164414',
    port: "5432"
  })
}


export default db;