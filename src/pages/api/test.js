import db from "../../util/database";

export default async function handler(req,res){
    db.connect();
    let response = await db.query('SELECT * FROM USUARIOS')
    db.end()
    
    res.json(response.rows)
}