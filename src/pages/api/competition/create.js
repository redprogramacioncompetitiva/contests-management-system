import {db} from '../../../util/database' 

export default async function handler(req, res) {
    
    const { method, body } = req;
    const data = body.data;
    const type = '6'

    if (method === 'POST') {

        if(new Date(data.startInscriptionDate).getTime() < new Date().getTime() ||
           new Date(data.endInscriptionDate).getTime() < new Date(data.startInscriptionDate).getTime() ||
           new Date(data.startDate).getTime() < new Date(data.endInscriptionDate).getTime() || 
           new Date(data.endDate).getTime() < new Date(data.startDate).getTime()){

            res.send({
                success: false,
                message: "Fechas malas"
            })

        }else if (data.maxMembers < data.minMembers) {
            res.send({
                success: false,
                message: "Miembros malos"
            })
            
        }else{

            let date = dateFormat(data)

            /*let insert = await db.query('INSERT INTO COMPETITION(NAME,DESCRIPTION,START_INSCRIPTION,END_INSCRIPTION,START_DATE,END_DATE,TEAM_MEMBERS_MIN,TEAM_MEMBERS_MAX) ' +
                                        'VALUES($1,$2,TO_TIMESTAMP($3),TO_TIMESTAMP($4),TO_TIMESTAMP($5),TO_TIMESTAMP($6),$7,$8,$9)',
                                        [data.name, data.description, date[0], date[1], date[2], date[3], data.minMembers, data.maxMembers, type]);*/     
    
            res.send({
                success: true,
                message: "Competencia agregada"
            })

        }
                 
    }        
        
}

function dateFormat(data){
    const format = 'DD-MM-YYYY HH24:MI'
    let array = []
    let info = null

    info = new Date(data.startInscriptionDate)
    array.push("'" + info.toLocaleString().split(", ")[0] + " " + info.getHours() + ":" + info.getMinutes() + "','" + format + "'")

    info = new Date(data.endInscriptionDate)
    array.push("'" + info.toLocaleString().split(", ")[0] + " " + info.getHours() + ":" + info.getMinutes() + "','" + format + "'")

    info = new Date(data.startDate)
    array.push("'" + info.toLocaleString().split(", ")[0] + " " + info.getHours() + ":" + info.getMinutes() + "','" + format + "'")

    info = new Date(data.endDate)
    array.push("'" + info.toLocaleString().split(", ")[0] + " " + info.getHours() + ":" + info.getMinutes() + "','" + format + "'")

    return array

}

