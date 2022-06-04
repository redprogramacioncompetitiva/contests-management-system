const { Pool } = require('pg')

var db;

if (!db){
  db = new Pool({
    host: 'localhost',
    user: 'postgres',
<<<<<<< HEAD
    database: 'PI1',
    password: 'mysecretpassword',
=======
    database: 'PI2',
    password: 'password',
>>>>>>> 6f145908f60a8a4a6b8a84ef56d6f002b2458489

    port: 5432
  })
}

export default db;