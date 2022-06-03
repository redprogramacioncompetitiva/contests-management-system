import db from "../../../util/database";

export default async function handler(req, res) {
    const {method, body} = req;
    const id = req.query;
    if (method === "POST") {
        const teamInfo = body;
        const teamNameFromData = teamInfo.tm;
        const values = ["12345678", teamNameFromData, "pepito"];
        
        console.log(teamInfo);
        //const query = 'INSERT INTO TEAM(ID_TEAM,TEAM_NAME,LEADER_USERNAME) VALUES ($1,$2,$3) RETURNING ID_TEAM';
              //try {
        //const response = await db.query(query,values);
        //return res.status(200).json(response.rows[0]);
              /*} catch (e) {
                  return res.status(400).json({message: e.message});
              }*/
    }
}
/*
db.query('INSERT INTO COMPETITION(NAME,DESCRIPTION,START_INSCRIPTION,END_INSCRIPTION,START_DATE,END_DATE,TEAM_MEMBERS_MIN,TEAM_MEMBERS_MAX) ' +
                                    'VALUES($1,$2,TO_TIMESTAMP($3),TO_TIMESTAMP($4),TO_TIMESTAMP($5),TO_TIMESTAMP($6),$7,$8)',
                                    [data.name, data.description, date[0], date[1], date[2], date[3]]);  */    
/* 
    let r = await db.query('INSERT INTO TEAM (NAME) VALUES ($1)', [req.body[i]])
*/