import db from '../../util/database'
import {Team,Competition} from '../../model/classes'

export default async function handler(req,res){
    const {method , body} = req;
    const teamsIds = await db.query('SELECT * FROM TEAM WHERE ID_TEAM IN (SELECT ID_TEAM FROM USER_TEAM_COMPETITION WHERE USERNAME = $1)',[body.username])
    var teams = []
    for (let index = 0; index < teamsIds.rows.length; index++) {
        var members = await db.query('SELECT USERNAME FROM USER_TEAM_COMPETITION WHERE ID_TEAM = $1',[teamsIds.rows[index].id_team])
        var institution = await db.query('SELECT NAME FROM INSTITUTION WHERE ID_INSTITUION = $1',[teamsIds.rows[index].id_institution])
        
        /* var team = new Team(teamsIds.rows[index].id_team, institution.rows[0] ,teamsIds.rows[index].team_name,members.rows) */
        
        var newTeam = {
            id : teamsIds.rows[index].id_team,
            intitution :  institution.rows[0],
            name : teamsIds.rows[index].team_nam,
            members : membersData,

        }
        teams.push(newTeam)
    }

    var competitions = []
    const comps = await db.query('SELECT * FROM COMPETITION')
    for (let index = 0; index < comps.rows.length; index++) {
        var venues = await db.query('SELECT VENUE_NAME FROM VENUE WHERE ID_VENUE IN(SELECT ID_VENUE FROM VENUE_COMPETITION WHERE ID_COMPETITION = $1)',[comps.rows[index].id_competition])
        
        var status = await db.query('SELECT STATUS_NAME FROM STATUS WHERE ID_STATUS = $1',[comps.rows[index].id_status])
        
        /*
        var newComp = new Competition(
            comps.rows[index].id_competition,
            comps.rows[index].name,
            comps.rows[index].description,
            comps.rows[index].start_inscription,
            comps.rows[index].end_inscription,
            comps.rows[index].start_date,
            comps.rows[index].end_date,
            comps.rows[index].team_members_max,
            comps.rows[index].team_members_min,
            status.rows[0],
            venues.rows
            )
        */

            var newComp = {
                id : comps.rows[index].id_competition,
                name : comps.rows[index].name,
                description : comps.rows[index].description,
                startInscription: comps.rows[index].start_inscription,
                endInscription : comps.rows[index].end_inscription,
                startDate : comps.rows[index].start_date,
                endDate : comps.rows[index].end_date,
                teamMax: comps.rows[index].team_members_max,
                teamMin : comps.rows[index].team_members_min,
                stratus : status.rows[0],
                venues : venues.rows
            }
            
        competitions.push(newComp)
    }

    const data = {
        teams: teams,
        competitions: competitions
    }
    res.status(200).json(data)
}

