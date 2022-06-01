import database from "../../util/database";

export default async function handle(req,res) {
    
    var body = req.body;
    var idCompetition = body.idCompetition;
    
    switch (req.method){
        case "GET": res.statusCode = 404; break;
        case "POST":
            var responseCompetitionInfo = await database.query(
                `SELECT ID_COMPETITION, NAME, DESCRIPTION, TEAM_MEMBERS_MAX 
                FROM COMPETITION 
                WHERE ID_COMPETITION = ${idCompetition}`)

            var competitionInfo = responseCompetitionInfo.rows[0];

            var responseVenueCompetition = await database.query(
                `SELECT ID_VENUE FROM VENUE_COMPETITION
                WHERE ID_COMPETITION = ${idCompetition};`
            )
            
            var auxString = ""

            for(var i=0;i<responseVenueCompetition.rows.length;i++) {
                var idVenue = responseVenueCompetition.rows[i].id_venue;
                
                var responseVenue = await database.query(
                    `SELECT SHORT_NAME, CITY_CODE FROM VENUE
                    WHERE ID_VENUE = ${idVenue};`
                )

                for(var j=0;j<responseVenue.rows.length;j++) {
                    var shortName = responseVenue.rows[j].short_name;
                    var cityCode = responseVenue.rows[j].city_code;
                    
                    var responseCity = await database.query(
                        `SELECT CITY_NAME, CITY_CODE FROM CITY
                        WHERE CITY_CODE = '${cityCode}';`
                    );
                    
                    var cityInfo = responseCity.rows[0]
        
                    auxString = auxString + shortName + "," + cityInfo.city_name + "\n"
                } 
            }
            //console.log(auxString)

            var details = {
                name : competitionInfo.name,
                description : competitionInfo.description,
                teamMembersMax : competitionInfo.team_members_max,
                institution_city: auxString
            };

            res.send(details)
    }
}