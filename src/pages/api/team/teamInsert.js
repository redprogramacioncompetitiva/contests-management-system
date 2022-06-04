import db from "../../../util/database";

export default async function handler(req, res) {
    const {method, body} = req;
    const id = req.query;
    if (method === "POST") {
        const teamInfo = body;
        //Generate a random code
        const ASCII_FOR_A= 65;
        const MAX_NUMERIC_PART_NUM = 999999;

        let takenId = false;
        let letter1 = "";
        let letter2 = "";
        let numPart = 0;
        let id_team = letter1 + letter2 + numPart;

        //Generate random id for team and verifying it isn't taken yet
        do {
          letter1 = String.fromCharCode((Math.floor(Math.random()*26)) + ASCII_FOR_A);
          letter2 = String.fromCharCode((Math.floor(Math.random()*26)) + ASCII_FOR_A);
          numPart = (Math.floor(Math.random()*MAX_NUMERIC_PART_NUM));
          id_team = letter1 + letter2 + numPart;
          //
          let PossibleIdCollisionData = await db.query("SELECT id_team FROM TEAM WHERE id_team LIKE '%"+ id_team+"%';");
          let PossibleIdCollision = PossibleIdCollisionData.rows;
          if(PossibleIdCollision.length != 0){
            takenId = true;
          }else{
            takenId = false;
          }
        } while (takenId);

        const teamNameFromData = teamInfo.tm.teamName;
        const username_leader = "pepito";
        const id_institution = 1;
        const values = [ id_team, teamNameFromData, username_leader, id_institution];
      
        //Create team
        const query = 'INSERT INTO TEAM(ID_TEAM,TEAM_NAME,LEADER_USERNAME,ID_INSTITUTION) VALUES ($1,$2,$3,$4) RETURNING ID_TEAM';
        
        try {
          const response = await db.query(query,values);
          res.status(200).json(response.rows[0]);
        } catch (e) {
          res.status(400).json({message: e.message});
        }

        //Add members to team if they exist
        let registeredUsersData = await db.query("SELECT s.username FROM users s");
        let registeredUsers = registeredUsersData.rows;
        
        for (let i = 0; i < teamInfo.tm.members.length; i++) {
          let foundINdex = registeredUsers.findIndex(element => element.username == teamInfo.tm.members[i]);
          if(foundINdex == -1){
            //console.log("NOT FOUND");
          }else{
            console.log("FOUND");
            const valuesMember =[teamInfo.tm.members[i], id_team];
            const query = 'INSERT INTO USERS_TEAM(USERNAME, ID_TEAM) VALUES ($1,$2)';

            try {
              const response = await db.query(query,valuesMember);
              res.status(200).json(response.rows[0]);
            } catch (error) {
              res.status(400).json({message: e.message});
            }
            
            
            
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