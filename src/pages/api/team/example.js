import db from "../../../util/database";

export default  async function example(req,res){

    
    
        console.log(req.body)
        
            for (let i = 0; i < req.body.length; i++){
                let r = await db.query('INSERT INTO TEAM (NAME) VALUES ($1)', [req.body[i]])
            console.log(r)
            }
        
    
    

res.send('ok')
}