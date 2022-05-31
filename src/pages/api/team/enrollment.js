import database from "../../../util/database";

export default async function handle(req, res){

    const {method, body} = req;
    let {idCompetition, idTeam, username} = body 

    var teamLeader = await database.query(
        `SELECT TEAM_LEADER
        FROM TEAM
        WHERE ID_TEAM = '${idTeam}'`
    )

    //Validate if the user who's trying to join the competititon is the leader
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
    
    //console.log(maxCompetitors.rows[0], teamCompetitors.rows[0])
    //Validate if the team doesn't exceed the maximum of competitors accepted in the competititon
    if (teamCompetitors.rows[0].count<maxCompetitors.rows[0].team_members_max) {
        competitorsNumber = false;
    }

    var teamCompetitors = await database.query(
        `SELECT USERNAME
        FROM USERS_TEAM
        WHERE ID_TEAM = '${idTeam}'`
    )

    // Inser for testing next validation: INSERT INTO USER_TEAM_COMPETITION (USERNAME, ID_TEAM, ID_COMPETITION) VALUES ( 'pepito' , 'TM000001', 004 );
    

    let alreadyInCompetition = true;
    validation()
    //Validate if any of the users is already registered in the same competition
    async function validation (){
        for (let index = 0; index < teamCompetitors.rows.length ; index++) {
                console.log(teamCompetitors.rows[index])
                let alreadyTeam = await database.query(
                    `SELECT ID_TEAM 
                    FROM USER_TEAM_COMPETITION
                    WHERE USERNAME = '${teamCompetitors.rows[index].username}' 
                    AND ID_COMPETITION = ${idCompetition}`
                )
                
                if(alreadyTeam.rowCount!==0){
                    alreadyInCompetition = false
                    break
                    
                }
                
            }
    }


    res.send("someting")
}
