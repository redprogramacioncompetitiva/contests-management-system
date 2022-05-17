import {db} from '../../util/database'
import {Team} from '../../model/classes'
export default async function handler(req,res){
    const {method , body} = req;
    const teamsIds = await db.query('SELECT * FROM TEAMS WHERE ID_TEAM IN (SELECT ID_TEAM FROM USERS_TEAM WHERE USERNAME = $1)',[body.username])
    var teams = []
    for (let index = 0; index < teamsIds.rows.length; index++) {
        var members = await db.query('SELECT USERNAME FROM USERS_TEAM WHERE ID_TEAM = $1',[teamsIds.rows[index].id_team])
        var team = new Team(teamsIds.rows[index].id_team,teamsIds.rows[index].team_name,members.rows)
        teams.push(team)
    }
    
    res.status(200).json(teams)
}

