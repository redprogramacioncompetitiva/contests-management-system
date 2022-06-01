
import { Container } from "@mui/material"

import { getCsrfToken } from "next-auth/react"

export default function SignIn({ csrfToken }) {



  return (
    <Container>
      <div className="overlay">
        <div className="main-container">
          <form method="post" action="/api/auth/callback/credentials" className="sign-in-form">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <h1 className="signin-h1">Iniciar Sesion</h1>
            <span>¿No tienes una cuenta? <a class="sign-a" href="/register">Registrarse</a> </span>

            <input className="sign-in-input" name="email" type="email" placeholder="Email" />


            <input className="sign-in-input" name="password" type="password" placeholder="Password" />

            <hr />
            <button className="sign-in-button" type="submit">Sign in</button>
          </form>
        </div>
      </div>
    </Container>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  }
}