import bcrypt from 'bcrypt'

export default async function(req, res){

    let pw= await bcrypt.hash(req.body.password, 10)

    console.log(pw)
}