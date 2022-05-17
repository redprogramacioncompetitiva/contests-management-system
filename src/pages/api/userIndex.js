import {db} from '../../util/database'
import {Team,CompetitionPreview} from '../../model/classes'
export default async function handler(req,res){
    const {method , body} = req;
    const teamsIds = await db.query('SELECT * FROM TEAMS WHERE ID_TEAM IN (SELECT ID_TEAM FROM USERS_TEAM WHERE USERNAME = $1)',[body.username])
    var teams = []
    for (let index = 0; index < teamsIds.rows.length; index++) {
        var members = await db.query('SELECT USERNAME FROM USERS_TEAM WHERE ID_TEAM = $1',[teamsIds.rows[index].id_team])
        var team = new Team(teamsIds.rows[index].id_team,teamsIds.rows[index].team_name,members.rows)
        teams.push(team)
    }

    var competitions = []
    const comps = await db.query('SELECT * FROM COMPETITION')
    for (let index = 0; index < comps.rows.length; index++) {
        var venues = await db.query('SELECT VENUE_NAME FROM VENUE WHERE ID_VENUE IN(SELECT ID_VENUE FROM VENUE_COMPETITION WHERE ID_COMPETITION = $1)',[comps.rows[index].id_competition])
        var newComp = new CompetitionPreview(comps.rows[index].id_competition,
            comps.rows[index].name,
            comps.rows[index].description,
            comps.rows[index].start_inscription,
            comps.rows[index].end_inscription,
            comps.rows[index].start_date,
            comps.rows[index].end_date,
            comps.rows[index].team_members_max,
            comps.rows[index].team_members_min,
            comps.rows[index].status,
            venues
            )
        competitions.push(newComp)
    }

    const data = {
        teams: teams,
        competitions: competitions
    }
    res.status(200).json(data)
}

