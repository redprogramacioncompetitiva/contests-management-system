import { Pool } from "pg";

var db;

if (!db){
    db = new Pool({
      user: 'postgres',
      database: 'PI_database',
      host: 'localhost',
      port: "5432",
      password: 'Blanco2021'
    })
}
export default db;

