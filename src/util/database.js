import {Pool} from "pg/lib";

var db;

if (!db){
    db = new Pool({
        host: 'localhost',
        user: 'postgres',
        password: 'daniela010604',
        database: 'postgres',
        port: 5432,
        
    })
}

export {db};