import React from 'react'
import { Autocomplete, TextField } from '@mui/material'

const RPCAutocomplete = (props) => {
    return (
        <Autocomplete
            disablePortal
            options={props.data}
            size='medium'
            renderInput={(params) => <TextField {...params} variant='outlined'  label={props.label} color={'secondary'}/>}
        />
    )
}

export default RPCAutocomplete