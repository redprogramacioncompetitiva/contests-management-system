import db from "../../../util/database";

export default async function teamInsert(req, res) {
    
    const {method, body} = req;
    const {id} = req.query;
    console.log("shi")
    if (method === "POST") {
        const {teamName} = body;
        const query = 'INSERT INTO TEAM (TEAM_NAME) VALUES ($1) RETURNING ID_TEAM';
        const values = [id, teamName];
        try {
            const response = await db.query(query, values);
            return res.status(200).json(response.rows[0]);
        } catch (e) {
            return res.status(400).json({message: e.message});
        }
    }
}