import db from "../../../util/database";

export default async function addToteam (req, res) {   
    const {method, body} = req;
    const {id} = req.query;
    if (method === "POST") {
        const { username } = body;
        const query = 'INSERT INTO USERS_TEAM (USERNAME, ID_TEAM) VALUES ($1, $2) RETURNING *';
        const values = [username, id];
        try {
            const response = await db.query(query, values);
            if (response.rows[0]) {
                console.log(response.rows[0])
                return res.status(200).json(response.rows[0]);
            } else {
                return res.status(400).json({ "msg": "Duplicate keys" });
            }
        } catch (e) {
            console.log(e);
            return res.status(400).json({ message: e.message });
        }
    }
}