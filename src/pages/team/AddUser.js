import { Button } from '@mui/material'
import React, { useState } from 'react'
import RPCAutocomplete from '../../components/RPCAutocomplete'
import RPCContainer from '../../components/RPCContainer'
import RPCTitle from '../../components/RPCTitle'
import { useSession } from "next-auth/react"
import Mixim from '../../components/RPCMixim'

const AddUser = ({ users }) => {
    const [user, setuser] = useState({
        username: ''
    })
    const { data: session } = useSession()

    const onSubmit = (e) => {
        e.preventDefault();
        //Geeting the team id of current user ⚠️
        const { id } = fetch(`api/team/${session.username}`, { method: "GET" })
        //Adding a user to TM000000 id team example ♻️, Integration replace TM000000 => id 
        fetch(`/api/team/${id}`, { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(user) }).then(res => {
            res.json().then(us => {
                if (us.username) {
                    Mixim('User: ' + us.username + ' have been added succesfully', 'success')
                } else {
                    Mixim(us.message, 'error');
                }
            })
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
    //const users = [{ username: 'edvi' }, { username: 'userreal' }, { username: 'userfalso' }, { username: 'joji' }, { username: 'felipe_a' }]
    //Call to HU-4 Endpoint (Get users)
   const req = await fetch("http://localhost:3000/api/user/getAll",{method:"GET"})
    const users = await req.json()
    return { props: { users } }
}

export default AddUser