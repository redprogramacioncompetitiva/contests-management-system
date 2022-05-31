import { Pool } from "pg/lib";

var db;

if (!db){
    db = new Pool({
      user: 'postgres',
      database: 'PI',
      host: 'localhost',
      port: 5432,
      password: 'ortiz2003'
    })
}
 export default {db};

