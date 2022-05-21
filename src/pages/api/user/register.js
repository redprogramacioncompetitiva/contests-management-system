import bcrypt from 'bcrypt'
import db from '../../util/database'

export default async function register(req, res) {
    const { method, body } = req;

    if (method === "POST") {
        body.username = body.username.trim();
        body.email = body.email.trim();
        body.name = body.name.trim();
        body.lastname = body.lastname.trim();

        let checkSpaces = body.username.indexOf(" ");
        let checkMiddleSpaces = body.username != "" && checkSpaces < 0 && body.email != "" && body.name != "" && body.lastname != ""

        let pwIsEqual = (body.password == body.confPassword);
        
        let pwHasMinLength = (body.password.length >= 6);
        let pwHasUpperCase = false;
        let pwHasLowerCase = false;
        let pwHasNumber = false;
        let pwHasSpecialCharacter = false;

        for (let i = 0; i < body.password.length && pwIsEqual; i++) {
            if (body.password.charAt(i) === body.password.charAt(i).toUpperCase()) {
                pwHasUpperCase = true;
            }
            if (body.password.charAt(i) === body.password.charAt(i).toLowerCase()) {
                pwHasLowerCase = true;
            }
            if (!isNaN(body.password.charAt(i))) {
                pwHasNumber = true;
            }
            if (body.password.charAt(i) === '.' || body.password.charAt(i) === '-' || body.password.charAt(i) === '*') {
                pwHasSpecialCharacter = true;
            }
        }

        let pwValidations = pwIsEqual && pwHasMinLength && pwHasUpperCase && pwHasLowerCase && pwHasNumber && pwHasSpecialCharacter

        if (checkMiddleSpaces && pwValidations) {
            let response = await db.query('SELECT USERNAME FROM USERS WHERE USERNAME = $1', [req.body.username])
            console.log(response.rows)

            let db1 = response.rows;

            var exit = false
            if (db1[0] === null) {
                exit = true
            }
            if (exit) {
                let pw = await bcrypt.hash(req.body.password, 10)
                console.log(pw)
                try {
                    await db.query('INSERT INTO USERS VALUES($1,$2,$3,$4,$5,$6)', [body.username, pw, body.email, body.name, body.lastname, 4])
                } catch (error) {
                    console.log(error)
                }
            }
        }
    } else {
        res.status(404)
    }
}