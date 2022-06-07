import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Router from "next/router";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState, useEffect} from "react"
import { useSession, signIn, signOut } from "next-auth/react"
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid transparent',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
};

const style1 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#ECFEEC',
    border: '2px solid transparent',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
};

const style2 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#FFCECE',
    border: '2px solid transparent',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
};


const state = {
<<<<<<< HEAD
    idCompetition: 1,
    idTeam: 'TM000000',
    username: "andres123"
=======
  idCompetition : 10,
  idTeam:'TM000000',
  username: "artux"
>>>>>>> 6f145908f60a8a4a6b8a84ef56d6f002b2458489
}

const competitionDetails = {
    name: '',
    description: '',
    teamMembersMax: 0,
    institution_city: ''
}


<<<<<<< HEAD
    let config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(state)
    }
    let r = await fetch("http://localhost:3000/api/team/enrollment", config)
    let data = await r.json()
    return data
    //console.log(data);
    //validationDetail.validationsPassed=data.validationsPassed;
}

const getDetails = async e => {
    var config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(state)
    }
    let details = await fetch('http://localhost:3000/api/details', config)
    let data = await details.json();
    console.log(data);
    competitionDetails.name = data.name;
    competitionDetails.description = data.description;
    competitionDetails.teamMembersMax = data.teamMembersMax;
    competitionDetails.institution_city = data.institution_city;
}

export default function Details() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <div id='information'>
                <b>Competition Id: </b>
                <p id='competition-id'>{state.idCompetition}</p>

                <b>Username: </b>
                <p id='leader-username'>{state.username}</p>

                <b>Team Id: </b>
                <p id='team-id'>{state.idTeam}</p>
            </div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-competition-name" variant="h5" component="h2">
                        {competitionDetails.name}
                    </Typography>

                    <div id='modal-content'>

                        <Typography id="modal-competition-description-head" sx={{mt: 2, color: '#8B8B8B'}}>
                            Description
                        </Typography>

                        <Typography id="modal-competition-description" sx={{mt: 2}}>
                            {competitionDetails.description}
                        </Typography>

                        <Typography id="modal-competition-venue-head" sx={{mt: 2, color: '#8B8B8B'}}>
                            Venue/s
                        </Typography>

                        <Typography id="modal-competition-venue" sx={{mt: 2}}>
                            {competitionDetails.institution_city}
                        </Typography>

                        <Typography id="modal-competition-max-members-head" sx={{mt: 2, color: '#8B8B8B'}}>
                            Max. Members
                        </Typography>

                        <Typography id="modal-competition-max-members" sx={{mt: 2}}>
                            {competitionDetails.teamMembersMax}
                        </Typography>
                    </div>

                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        < Alert/>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}



function Alert() {
    getDetails();
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const handleClose1 = () => setOpen1(false);
    const handleClose2 = () => setOpen2(false);


    const handleJoin = async e => {
        let config1 = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
        }
        let r = await fetch("http://localhost:3000/api/team/enrollment", config1)
        let data = await r.json()
        let validation = data
        console.log(data)
        if (validation.validationsPassed) {
            var config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(state)
            }
            await fetch('http://localhost:3000/api/competition/join', config)

            setOpen1(true);
        } else {
            setOpen2(true);
        }
    }

    return (
        <div>
            <Button onClick={handleJoin}>Join</Button>
            <Modal
                open={open1}
                onClose={handleClose1}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style1}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <b>Training Session</b>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 4 }}>
                        The team was successfully registered in the competition!
                    </Typography>
                    <div>
                        <img src="../../icons/check_icon.png"/>
                    </div>
                </Box>
            </Modal>
            <Modal
                open={open2}
                onClose={handleClose2}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style2}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Training Session
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 4 }}>
                        The team is not allowed to be registered in the competition. Number of members exceed.
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
=======

const getDetails = async e => {
  var config = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body : JSON.stringify(state)
  }
  let details = await fetch('http://localhost:3000/api/details',config)
  let data = await details.json();
  competitionDetails.name = data.name;
  competitionDetails.description = data.description;
  competitionDetails.teamMembersMax = data.teamMembersMax;
  competitionDetails.institution_city = data.institution_city;
}

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

const showPosts = () => {
  const [posts, setPosts] = useState([]);
  
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
          } catch (err) {
              console.log(err);
          }
      }
      fetchData();
  }, []);
  return(
    <div>
      {posts.map((team)=> (
        <p>{team.team_name}</p>
      ))}
    </div>
  );
}
const getTeams = async()=>{
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

  /*const numbers = data
  const listItems = numbers.map((number) =>
    <MenuItem value={number.id_team}> El mismo </MenuItem>
  )
  console.log(listItems)*/
  console.log(data)
  return(
    <div>
      {data.map((team)=> (
        <p>{team.team_name}</p>
      ))}
    </div>
  );
}

export default function Details() {
  const { data: session, status } = useSession()
  const handleOpen = () => setOpen(true); getDetails();
  const handleClose = () => setOpen(false);
  const [open, setOpen] = React.useState(false);
  const [team, setTeam] = React.useState('');
  const [posts, setPosts] = useState([]);
  const handleChange = (event) => {
    setTeam(event.target.value);
  };

  const showPosts = () => {
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
                
                //console.log(useSession())
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

  return (
    <div>
      <div id='information'>
        <b>Competition Id: </b>
        <p id='competition-id'>{state.idCompetition}</p>

        <b>Username: </b>
        <p id='leader-username'>{state.username}</p>

        <b>Team Id: </b>
        <p id='team-id'>{state.idTeam}</p>
      </div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
              {showPosts()}
            
          </div>

          <Box sx={{ display:'flex' ,justifyContent:'center'}}>
            <Button sx={{width:100, backgroundColor: '#01A4FF', color: '#FFFFFF', borderRadius: 2}} variant='contained    ' onClick={handleJoin}>
                Join
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
>>>>>>> 6f145908f60a8a4a6b8a84ef56d6f002b2458489
}







