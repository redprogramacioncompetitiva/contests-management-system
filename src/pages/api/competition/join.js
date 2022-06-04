import database from "../../../util/database";
export default async (req, res) => {

    const {method, body} = req;


    const idTeam = body.idTeam;
    const idCompetition = body.idCompetition;

    switch(method){
        case 'GET': res.statusCode = 404; break;

        case 'POST':
        const members = await database.query(`SELECT USERNAME FROM USERS_TEAM WHERE ID_TEAM = '${idTeam}'`);
        for (let index = 0; index < members.rows.length; index++){
            await database.query('INSERT INTO USER_TEAM_COMPETITION VALUES($1, $2, $3)', [members.rows[index].username, idTeam, idCompetition])
        }
    }
};