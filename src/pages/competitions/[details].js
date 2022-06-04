import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Router from "next/router";

var state = {
    idCompetition : 0, //10
    idTeam:'',  //'TM000000'
    username: ''  //"pepito"
}

var competitionDetails = {
    name:'',
    description:'',
    teamMembersMax:0,
    institution_city:''
}

const getDetails = async e => {   
    var config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(state)
    }

    let details = await fetch("http://localhost:3000/api/competition/" + state.idCompetition,config)
    let data = await details.json();
    competitionDetails.name = data.name;
    competitionDetails.description = data.description;
    competitionDetails.teamMembersMax = data.teamMembersMax;
    competitionDetails.institution_city = data.institution_city;
}

const validateTeam = async () => {

    let config = {
      method: 'POST',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(state)
    }
    let r= await fetch("http://localhost:3000/api/team/enrollment", config)
    let data = await r.json()
    return data
    //console.log(data);
    //validationDetail.validationsPassed=data.validationsPassed;
  }

Details.getInitialProps = async(context) => {
    const path = context.asPath.split('/');
    const idCompetition = path[path.length-1];
    state.idCompetition = idCompetition;
    getDetails();
    const details = competitionDetails;
    return { competitionDetails : details }
}

export default function Details({competitionDetails}) {
    
    const handleJoin = async e => {
        let config1 = {
          method: 'POST',
          headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(state)
        }
        let r= await fetch("http://localhost:3000/api/team/enrollment", config1)
        let data = await r.json()
        let validation = data
        console.log(data)
        if (validation.validationsPassed){
          var config = {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body : JSON.stringify(state)
          }
          Router.push('/competitions/success_register')
          await fetch('http://localhost:3000/api/competition/join', config)
    
          
        }else{
          Router.push('/competitions/fail_register')
        }
    }
    
    return (
        <Box>
          <Typography id="modal-competition-name" variant="h5" component="h2">
            {competitionDetails.name}
          </Typography>

          <div id='modal-content'>

            <Typography id="modal-competition-description-head" sx={{ mt: 2, color: '#8B8B8B' }}>
                Description
            </Typography>

            <Typography id="modal-competition-description" sx={{ mt: 2 }}>
                {competitionDetails.description}
            </Typography>

            <Typography id="modal-competition-venue-head" sx={{ mt: 2, color: '#8B8B8B' }}>
                Venue/s
            </Typography>

            <Typography id="modal-competition-venue" sx={{ mt: 2 }}>
                {competitionDetails.institution_city} 
            </Typography>

            <Typography id="modal-competition-max-members-head" sx={{ mt: 2, color: '#8B8B8B' }}>
                Max. Members
            </Typography>

            <Typography id="modal-competition-max-members" sx={{ mt: 2 }}>
              {competitionDetails.teamMembersMax}
            </Typography>
          </div>

          <Box sx={{ display:'flex' ,justifyContent:'center'}}>
            <Button sx={{width:100, backgroundColor: '#01A4FF', color: '#FFFFFF', borderRadius: 2}} variant='contained    ' onClick={handleJoin}>
                Join
            </Button>
          </Box>
        </Box>
    );
}