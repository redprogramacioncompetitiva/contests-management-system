import React from 'react'
import { Autocomplete, TextField } from '@mui/material'

const RPCAutocomplete = (props) => {
    return (
        <Autocomplete
            disablePortal
            options={props.data}
            getOptionLabel={(option) => option.username}
            size='medium'
            onChange={(_,value) =>( props.handle({ target: { value: value } }))}
            renderInput={(params) => <TextField {...params} variant='outlined' required label={props.label} color={'secondary'}/>}
        />
    )
}

export default RPCAutocomplete