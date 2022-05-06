import { Client } from "pg/lib";

var db;

if (!db){
    db = new Client({
        connectionString: process.env.postgres_uri,
        ssl: {
          rejectUnauthorized: false
        }
      });
}
 export default db;

