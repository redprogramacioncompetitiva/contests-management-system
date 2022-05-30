export default function Test(){
    let variables = { idCompetition: 4, idTeam: 'TM000000', username: 'pepito' }
    const createUser = async () => {

        let config = {
            method: 'POST', 
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(variables)
        }
        let r= await fetch("http://localhost:3000/api/team/enrollment", config)

       // console.log(r);
    }
    createUser()
}