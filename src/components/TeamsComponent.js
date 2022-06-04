import {Component} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useSession,getSessions} from 'next-auth/react'
import { redirect } from 'next/dist/server/api-utils';
import { Search } from '@mui/icons-material';

export default class TeamsComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            team: '',
            idTeam: '',
            teams: [],
            username : this.props.username
        }

        
        
    }

    saludar(){
        console.log("hello")
    }

    searchData = async (e) =>{

        
        console.log(this.props.username)
        const res = await fetch('http://localhost:3000/api/team/leader',{
            method: 'POST',
            headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
            },
            body : JSON.stringify(this.state)
           });
       let json = await res.json()
        this.setState({
           teams: json
       }) 
       console.log(json)
       console.log(this.props.username) 
    }
    


    handleChange = e =>{

        this.setState({
            idTeam : e.target.value,
            team: targe.value
        })
        
    console.log(this.state.team)
    }

    
    render(){
        
        
        
            
              console.log(this.state) 
            
       
            return (
                
               <div>
            <button onClick={this.searchData}>
                Select Team
            </button>
                <FormControl sx={{ mt: 2, mb: 2, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Team</InputLabel>
          <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={this.state.team}
                onChange={this.handleChange}
                autoWidth
                //dame un seg
                label="Team"
              >
                {this.state.teams.map((team)=> (
            <MenuItem key= {team.id_team} value={team.id_team}> {team.team_name}  {team.id_team} </MenuItem>
          ))}
          </Select>
          
          
          </FormControl> 
               </div>
    
          
            )
        
        

        
    }


}