import { Divider } from '@mui/material'
import React from 'react'

const RPCTitle = ({title,description}) => {
  return (
    <div className="mb-4 text-center">
      <h2>{title}</h2>
      <p className="lead">
        {description}
      </p>
      <Divider variant="middle" />
    </div>
  )
}

export default RPCTitle