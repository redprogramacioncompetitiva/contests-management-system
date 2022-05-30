import Image from 'next/image'

import styles from '../styles/Home.module.css'
import TeamsItem from '../components/users/TeamsItem'
import CustomHeader from '../components/CustomHeader'



import { useSession, signIn, signOut } from "next-auth/react"
export default function Component() {
  const { data: session } = useSession()
  console.log(session)
  if (session) {


    return (


      <div className={styles.container}>

        <CustomHeader title = "Home"></CustomHeader>
        


        <main className={styles.main}>
          <TeamsItem></TeamsItem>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js! </a> {session.name}
          </h1>

          <p className={styles.description}>

            Get started by editing{' '}
            <code>pages/index.js</code>
          </p>


          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>

              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>

          <button onClick={() => signOut()} className={styles.card}>Sign out</button>
        </main>

        <footer className={styles.footer}>

          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>

      </div>
    )
  }
  return (

    <div className={styles.main}>
      <h1 className={styles.title}>Not signed in</h1>
      <button onClick={() => signIn()} className={styles.card}>Sign in</button>

    </div>
  )
}