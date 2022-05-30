import database from "../../util/database";

export default async function handle(req) {
    switch (req.method){
        case "GET": res.statusCode = 404; break;
        case "POST":
            let response = await database.query('SELECT * FROM USERS WHERE USER_TYPE = 2')
            console.log(response.rows)
    }
}