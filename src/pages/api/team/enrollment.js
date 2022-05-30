import database from "../../../util/database";

export default async function handle(req, res){

    const {method, body} = req;
    let {idCompetition, idTeam, username} = body 

    var teamLeader = await database.query(
        `SELECT TEAM_LEADER
        FROM TEAM
        WHERE ID_TEAM = '${idTeam}'`
    )
   let leaderValidation = teamLeader.rows[0].team_leader === username

   let competitorsNumber = true;

    var maxCompetitors = await database.query(
        `SELECT TEAM_MEMBERS_MAX
        FROM COMPETITION 
        WHERE ID_COMPETITION = ${idCompetition}`)
    
    var teamCompetitors = await database.query(
        `SELECT COUNT(USERNAME) 
        FROM USERS_TEAM
        WHERE ID_TEAM = '${idTeam}'`
    )
    
    console.log(maxCompetitors.rows[0], teamCompetitors.rows[0])
    if (teamCompetitors.rows[0].count<maxCompetitors.rows[0].team_members_max) {
        competitorsNumber = false;
    }

    console.log(competitorsNumber)

    res.send("someting")
}
