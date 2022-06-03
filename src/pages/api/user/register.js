import bcrypt from 'bcrypt'
import db from '../../../util/database'

export default async function register(req, res) {
    const { method, body } = req;

    if (method === "POST") {

        body.userName = await body.userName.trim();
        body.email = await body.email.trim();
        body.name = await body.name.trim();
        body.lastName = await body.lastName.trim();

        let checkSpaces = await body.userName.indexOf(" ");
        let checkMiddleSpaces = (body.userName != "" && checkSpaces < 0 && body.email != "" && body.name != "" && body.lastName != "");

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

        let pwValidations = (pwIsEqual && pwHasMinLength && pwHasUpperCase && pwHasLowerCase && pwHasNumber && pwHasSpecialCharacter);

        if (checkMiddleSpaces && pwValidations) {

            let response = await db.query('SELECT USERNAME FROM USERS WHERE USERNAME = $1', [req.body.userName]);
            let emailResponse = await db.query('SELECT EMAIL FROM USERS WHERE EMAIL = $1', [req.body.email])

            let db1 = response.rows;
            let db2 = emailResponse.rows;

            if (db1[0] === undefined && db2[0] === undefined) {

                let pw = await bcrypt.hash(req.body.password, 10)

                try {
                    await db.query('INSERT INTO USERS VALUES($1,$2,$3,$4,$5,$6)', [body.userName, pw, body.email, body.name, body.lastName, 4])
                    res.status(200).json({ result: "Insert" });

                } catch (error) {
                    console.log(error)
                }
            } else {
                if (db1[0] !== undefined) {
                    res.status(400).json({ result: "UserNameNotUnique" });

                } else if (db2[0] !== undefined) {
                    res.status(400).json({ result: "EmailNotUnique" });
                }
            }
        } else {
            if (!pwIsEqual) {
                res.status(400).json({ result: "PassNotEquals" });

            } else if (!checkMiddleSpaces) {
                if (checkSpaces >= 0) {
                    res.status(400).json({ result: "MiddleSpaces" })
                } else {
                    res.status(400).json({ result: "EmptySpaces" })
                }


            } else if (!pwValidations) {
                res.status(400).json({ result: "PassNotValidate" })
            }
        }
    } else {
        res.status(404)
    }
}