export default async function handler(req, res) {
    
    
    const { method, body } = req;
    const data = body.data;

    if (method === 'POST') {
        
        console.log(data);

        if(new Date(data.endInscriptionDate).getTime() < new Date(data.startInscriptionDate).getTime() || new Date(data.endDate).getTime() < new Date(data.startDate).getTime()){
            res.send({
                success: false,
                message: "Fechas malas"
            })

        }

        if (data.maxMembers < data.minMembers) {
            res.send({
                success: false,
                message: "Miembros malos"
            })
            
        }

        let date = formatDate(data)

        /*let insert = await db.query('INSERT INTO COMPETITION(NAME,DESCRIPTION,START_INSCRIPTION,END_INSCRIPTION,START_DATE,END_DATE,TEAM_MEMBERS_MIN,TEAM_MEMBERS_MAX) ' +
                                    'VALUES($1,$2,TO_TIMESTAMP($3),TO_TIMESTAMP($4),TO_TIMESTAMP($5),TO_TIMESTAMP($6),$7,$8)',
                                    [data.name, data.description, date[0], date[1], date[2], date[3]]);  */          

        res.send({
            success: true,
            message: "Competencia agregada"
        })
           
        

            
           
    }        
        
}

function formatDate(data){
    const format = 'DD-MM-YYYY HH:MI'
    let array = []

    let info = new Date(data.startInscriptionDate).toLocaleString().split(", ")
    info[1] = info[1].replaceAll(".", "").replaceAll(" ", "")
    array.push("'" + info[0] + " " + info[1] + "','" + format + "'")

    info = new Date(data.endInscriptionDate).toLocaleString().split(", ")
    info[1] = info[1].replaceAll(".", "").replaceAll(" ", "")
    array.push("'" + info[0] + " " + info[1] + "','" + format + "'")

    info = new Date(data.startDate).toLocaleString().split(", ")
    info[1] = info[1].replaceAll(".", "").replaceAll(" ", "")
    array.push("'" + info[0] + " " + info[1] + "','" + format + "'")

    info = new Date(data.endDate).toLocaleString().split(", ")
    info[1] = info[1].replaceAll(".", "").replaceAll(" ", "")
    array.push("'" + info[0] + " " + info[1] + "','" + format + "'")

    console.log(array)

    return array


}

