import Image from 'next/image'

import styles from '../styles/Home.module.css'
import TeamsItem from '../components/users/TeamsItem'
import CustomHeader from '../components/CustomHeader'


import { Button } from '@mui/material'


import { useSession, signIn, signOut } from "next-auth/react"
export default function Component() {
  const { data: session } = useSession()
  console.log(session)
  console.log(Date().toString())
  if (session) {


    return (


      <div>
        <h1>
          you're logged
          <button onClick={signOut}>signout</button>
        </h1>
      </div>
    )
  }
  return (

    <div className={styles.main}>
      <h1 className={styles.title}>Not signed in</h1>
      <Button onClick={() => signIn()}>Sign in</Button>
    </div>
  )
}