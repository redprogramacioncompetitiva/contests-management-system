import db from "../../../util/database";

async function getAllUsers(req, res) {
    const { method } = req;
    if (method === "GET") {
        const query = 'SELECT * FROM USERS';
        try {
            const response = await db.query(query);
            return res.status(200).json(response.rows);
        } catch (e) {
            console.log(e);
            return res.status(400).json({ message: e.message });
        }
    }
}

export default getAllUsers;