import bcrypt from 'bcrypt'
import db from '../../util/database'

export default async function register(req, res) {
    let response = await db.query('SELECT USERNAME FROM USERS WHERE USERNAME = $1', [req.body.username])
    console.log(response.rows)

    let db1 = response.rows;
    const { method, body } = req;

    if (method === "POST") {
        var exit = false
        if (db1[0] === null) {
            exit = true
        }
        if (exit) {
            let pw = await bcrypt.hash(req.body.password, 10)
            console.log(pw)
            try {
                await db.query('INSERT INTO USERS VALUES($1,$2,$3,$4,$5,$6)', [body.username, body.password, body.email, body.name, body.lastname, 4])
            } catch (error) {
                console.log(error)
            }
        }

    } else {
        res.status(404)
    }
}

