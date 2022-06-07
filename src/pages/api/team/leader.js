import database from "../../../util/database";

export default async function handle(req, res){

    const {method, body} = req;
    let {username} = body 


    var teamLeader = await database.query(`
    SELECT DISTINCT C.TEAM_NAME, C.ID_TEAM 
    FROM TEAM C JOIN USERS_TEAM D
    ON D.ID_TEAM = C.ID_TEAM
    WHERE LEADER_USERNAME = '${username}'`)

    return res.send(teamLeader.rows)

}