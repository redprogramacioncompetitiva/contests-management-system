import database from "../../util/database";

export default async function handle(req) {
    
    var idCompetition = '4';
    
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

            var idVenue = responseVenueCompetition.rows[0].id_venue;

            var responseVenue = await database.query(
                `SELECT SHORT_NAME, CITY_CODE FROM VENUE
                WHERE ID_VENUE = ${idVenue};`
            )

            var shortName = responseVenue.rows[0].short_name;
            var cityCode = responseVenue.rows[0].city_code;

            var responseCity = await database.query(
                `SELECT CITY_NAME, CITY_CODE FROM CITY
                WHERE CITY_CODE = '${cityCode}';`
            );

            var cityInfo = responseCity.rows[0]

            var details = {
                name : competitionInfo.name,
                description : competitionInfo.description,
                teamMembersMax : competitionInfo.team_members_max,
                institution : shortName,
                city : cityInfo.city_name
            };

            console.log(details);

    }
}