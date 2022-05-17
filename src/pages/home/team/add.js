import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import RPCAutocomplete from '../../../components/RPCAutocomplete'
import RPCContainer from '../../../components/RPCContainer'
import RPCTitle from '../../../components/RPCTitle'

const add = ({ users }) => {
    return (
        <RPCContainer>
            <div className='row'>
                <RPCTitle title={"Adding a User 🚀"} description={"In this section you can add a user to a team"} />
                <div className='col-md-6 mt-2' >
                    <RPCAutocomplete label="Users" data={users} />
                </div>
                <div className='col-md-6 mt-4'>
                    <Button color='primary' variant='contained' size='large' fullWidth>
                        Add
                    </Button>
                </div>
            </div>




        </RPCContainer>
    )
}

export default add

export async function getStaticProps() {
    //For testing porpouses
    const users = ['Daniel', 'Jose', 'Andres', 'Camilo', 'Ordonez', 'Samuel']
    //const req = await fetch("api/users/getall",{method:"GET"})
    //const users = await req.json()
    return { props: { users } }
}