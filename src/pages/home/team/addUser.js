import { Button } from '@mui/material'
import React, { useState } from 'react'
import RPCAutocomplete from '../../../components/RPCAutocomplete'
import RPCContainer from '../../../components/RPCContainer'
import RPCTitle from '../../../components/RPCTitle'
import { useSession } from "next-auth/react"
import Mixim from '../../../components/RPCMixim'

const addUser = ({ users }) => {
    const [user, setuser] = useState({
        username: ''
    })
    const { data: session } = useSession()

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        //Geeting the team id of current user ⚠️
        const {id} = fetch(`api/users/${session.id}`,{method:"GET"}) 
        //Adding a user to 32 id team example ♻️, Integration replace 32 => id 
        fetch(`/api/team/${id}`, { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(user) }).then(res => {
            Mixim('User: ' + res.name + 'have been added succesfully', 'success')
        }).catch(err => {
            Mixim(err, 'error')
        })
    }

    const handleChange = (event) => {
        const { value } = event.target
        setuser(value);
    };

    return (
        <RPCContainer>
            <form onSubmit={onSubmit}>
                <div className='row'>
                    <RPCTitle title={"Adding a User 🚀"} description={"In this section you can add a user to a team"} />
                    <div className='col-md-6 mt-2' >
                        <RPCAutocomplete label="Users" data={users} handle={handleChange} />
                    </div>
                    <div className='col-md-6 mt-2'>
                        <Button color='primary' type='submit' variant='contained' size='large' fullWidth>
                            Add
                        </Button>
                    </div>
                </div>
            </form>
        </RPCContainer>
    )
}

export async function getStaticProps() {
    //For testing porpouses 🛑
    const users = [{ userName: 'Daniel' }, { userName: 'Jose' }, { userName: 'Andres' }, { userName: 'Camilo' }, { userName: 'Alejandro' }]
    //Call to HU-4 Endpoint (Get users)
    //const req = await fetch("api/users/getall",{method:"GET"})
    //const users = await req.json()
    return { props: { users } }
}

export default addUser