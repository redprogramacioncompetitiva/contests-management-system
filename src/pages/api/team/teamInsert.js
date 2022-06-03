import db from "../../../util/database";

export default async function handler(req, res) {
    const {method, body} = req;
    const id = req.query;
    if (method === "POST") {
        const teamInfo = body;
        const id_team = "12345678";
        const teamNameFromData = teamInfo.tm.teamName;
        const values = [ id_team, teamNameFromData, "pepito"];
        
        console.log(teamNameFromData);
        //const query = 'INSERT INTO TEAM(ID_TEAM,TEAM_NAME,LEADER_USERNAME) VALUES ($1,$2,$3) RETURNING ID_TEAM';
              //try {
        //const response = await db.query(query,values);
        //return res.status(200).json(response.rows[0]);
              /*} catch (e) {
                  return res.status(400).json({message: e.message});
              }*/
        let registeredUsersData = await db.query("SELECT s.username FROM users s");
        let registeredUsers = registeredUsersData.rows;
        
        console.log(registeredUsers[0].username);

        console.log(teamInfo.tm.members);
        for (let i = 0; i < teamInfo.tm.members.length; i++) {
          let foundINdex = registeredUsers.findIndex(element => element.username == teamInfo.tm.members[i]);
          if(foundINdex == -1){
            //console.log("NOT FOUND");
          }else{
            console.log("FOUND");
            const valuesMember =[teamInfo.tm.members[i], id_team];
            const query = 'INSERT INTO USERS_TEAM(USERNAME, ID_TEAM) VALUES ($1,$2)';
            const response = await db.query(query,valuesMember);
            //return res.status(200).json(response.rows[0]);
          }
        }
        //let userFoundIndex = registeredUsers.findIndex(element => element.username);

    }
}
/*
db.query('INSERT INTO COMPETITION(NAME,DESCRIPTION,START_INSCRIPTION,END_INSCRIPTION,START_DATE,END_DATE,TEAM_MEMBERS_MIN,TEAM_MEMBERS_MAX) ' +
                                    'VALUES($1,$2,TO_TIMESTAMP($3),TO_TIMESTAMP($4),TO_TIMESTAMP($5),TO_TIMESTAMP($6),$7,$8)',
                                    [data.name, data.description, date[0], date[1], date[2], date[3]]);  */    
/* 
    let r = await db.query('INSERT INTO TEAM (NAME) VALUES ($1)', [req.body[i]])
*/