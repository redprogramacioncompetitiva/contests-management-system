import { Container } from "@mui/material"
import { margin } from "@mui/system"
import { getCsrfToken } from "next-auth/react"

export default function SignIn({ csrfToken }) {
    return (
        <Container>
            <div class='overlay'>
                <div class="main-container">
                    <form class="sign-in-form" action="/api/auth/callback/credentials">
                        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                        <h1  class="sigin-h1">INICIAR SESIÓN</h1>
                        <span>¿No tienes una cuenta? <a class="sign-a" href="/register">Registrarse</a> </span>
                        <input class="sign-in-input" type="email" placeholder="Email" name="email" />
                        <input class="sign-in-input" type="password" placeholder="Password" name="password" />
                        <hr />
                        <button class="sign-in-button">Sign In &#8594;</button>
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