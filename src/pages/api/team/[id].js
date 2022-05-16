import {db} from ".../../../util/database";

export default async function(req, res){
    const {method,body} = req;
    const {id} = req.params;
    if(method === "POST"){
        const {userName,id_team} = body;
        const result = await db.query(`
            INSERT INTO USERS_TEAM ()
            VALUES ($1,$2,$3)
            RETURNING *
        `, [name,description,image]);
        res.status(200).json(result.rows[0]);
    }
}