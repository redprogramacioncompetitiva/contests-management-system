import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Router from "next/router";
import { useSession, signIn, signOut, getSession } from "next-auth/react"
import {useEffect, useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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

    const {data: session} = useSession();
    state.username = session.username
}



/*Details.getInitialProps = async(context) => {
    const path = context.asPath.split('/');
    const idCompetition = path[path.length-1];
    state.idCompetition = idCompetition;
    getDetails();
    const details = competitionDetails;
    return { competitionDetails : details }
}*/

const showPosts = () => {
  const [team, setTeam] = useState('');
  const [posts, setPosts] = useState([]);
  const handleChange = (event) => {
    state.idTeam = (event.target.value)
    setTeam(event.target.value);
    console.log(state.idTeam)
  };
  useEffect( () => { 
      async function fetchData() {
          try {
            let config = {
              method: 'POST',
              headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
              },
              body: JSON.stringify(state)
            }
            let r= await fetch("http://localhost:3000/api/team/leader", config)
            let data = await r.json()
              setPosts(data);
              console.log(data)
          } catch (err) {
              console.log(err);
          }
      }
      fetchData();
  }, []);
  return(
    
      <FormControl sx={{ mt: 2, mb: 2, minWidth: 80 }}>
      <InputLabel id="demo-simple-select-autowidth-label">Team</InputLabel>
      <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={team}
            onChange={handleChange}
            autoWidth
            label="Team"
          >
            {posts.map((team)=> (
        <MenuItem key= {team.id_team} value={team.id_team}> {team.team_name} - {team.id_team} </MenuItem>
      ))}
      </Select>
      
      </FormControl>
    
  );
}


Details.getInitialProps = async(context) => {
  const path = context.asPath.split('/');
  const idCompetition = path[path.length-1];
  state.idCompetition = idCompetition;
  getDetails();
  const session = await getSession(context)
  if(session){
    let config = {
      method: 'POST',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(state)
    }
    let r= await fetch("http://localhost:3000/api/team/leader", config)
    let data = await r.json()
    const details = competitionDetails;
    return { competitionDetails : details, data: data }
  }
  
}
export default function Details({competitionDetails, data}) {
  console.log(data)
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