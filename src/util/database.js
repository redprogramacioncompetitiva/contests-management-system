const { Pool } = require('pg')


let db;

if (!db) {
  db = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'test',
    password: 'brull1970',
    port: "5432"
  })
}


export default db;