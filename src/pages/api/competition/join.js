import {db} from '../../../util/database';

export default async (req, res) => {

    const {method, body} = req;
    const idTeam = body.teamId;


    switch(method){
        case 'GET': res.statusCode = 404; break;

        case 'POST':
        const team = await db.query('SELECT USERNAME FROM USERS_TEAM WHERE ID_TEAM = ${idTeam}');

        for (let index = 0; index < team.rows.length; index++){
            var members = [];
            members[index] = team.rows[index];
        }

    }

}