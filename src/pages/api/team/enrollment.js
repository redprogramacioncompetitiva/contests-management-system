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

    // Insert for testing next validation: INSERT INTO USER_TEAM_COMPETITION (USERNAME, ID_TEAM, ID_COMPETITION) VALUES ( 'pepito' , 'TM000001', 004 );
    

    var alreadyInCompetition = true;
    validation()
    //Validate if any of the users is already registered in the same competition
    async function validation (){
        for (let index = 0; index < teamCompetitors.rows.length ; index++) {
                //console.log(teamCompetitors.rows[index])
                let alreadyTeam = await database.query(
                    `SELECT ID_TEAM 
                    FROM USER_TEAM_COMPETITION
                    WHERE USERNAME = '${teamCompetitors.rows[index].username}' 
                    AND ID_COMPETITION = ${idCompetition}`
                )
                
                if(alreadyTeam.rowCount!==0){
                    alreadyInCompetition = false;
                    break
                    
                }
                
            }
    }

    //Obtain start and end date of competition 
    let dates = await database.query(
        `SELECT START_DATE, END_DATE 
        FROM COMPETITION 
        WHERE ID_COMPETITION = ${idCompetition}`
    )

    let initial = dates.rows[0].start_date
    let final = dates.rows[0].end_date

    const initialDate = new Date(initial)
    const finalDate = new Date(final)
    
    initial = dateString(initialDate)
    final = dateString(finalDate)

    var simultaneousCompetition = true

    //Validate if an user is already enrolled in another competition in the same dates (simultaneously)
    for (let index = 0; index < teamCompetitors.rows.length ; index++) {
        let otherCompetition = await database.query(
            `SELECT C.ID_COMPETITION FROM 
            USER_TEAM_COMPETITION C JOIN COMPETITION D
            ON C.ID_COMPETITION = D.ID_COMPETITION 
            WHERE C.USERNAME = '${teamCompetitors.rows[index].username}'
            AND (END_DATE >= '${initial}' AND END_DATE<= '${final}') 
            OR (START_DATE >= '${initial}' AND START_DATE<= '${final}')
            `
        )
        if(otherCompetition.rowCount!==0){
            simultaneousCompetition=false 
            break 
        }     
    }
    
    let validations =(simultaneousCompetition && alreadyInCompetition && competitorsNumber && leaderValidation)

    let response = {
        validationsPassed : validations
    }
    return res.send(JSON.stringify(response))
}

function dateString(newDate){
    var datestring = (newDate.getFullYear()) + "-" + ("0"+(newDate.getMonth()+1)).slice(-2) + "-" + ("0" + newDate.getDate()).slice(-2) 
    + " " + ("0" + newDate.getHours()).slice(-2) + ":" + ("0" + newDate.getMinutes()).slice(-2);

    return datestring
}
