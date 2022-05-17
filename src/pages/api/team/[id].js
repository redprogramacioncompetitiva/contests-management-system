import {db} from "../../../util/database";

export default async function (req, res) {
    const {method, body} = req;
    const {id_team} = req.query;
    if (method === "POST") {
        const {userName} = body;
        const query = 'INSERT INTO USERS_TEAM (USERNAME, ID_TEAM) VALUES ($1, $2) RETURNING *';
        const values = [userName, id_team];
        try {
            const response = await db.query(query, values);
            return res.status(200).json(response.rows[0].json);
        } catch (e) {
            return res.status(400).json({message: e.message});
        }
    }
}