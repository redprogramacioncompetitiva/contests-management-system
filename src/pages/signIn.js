import { Container } from "@mui/material"
import { margin } from "@mui/system"
import { getCsrfToken } from "next-auth/react"

export default function SignIn({ csrfToken }) {
    return (
        <Container>
            <div class="sign-in-view">
                <div class="main-container">
                    <div class="form-signin-container sign-in-container">
                        <form class="sign-in-form" action="/api/auth/callback/credentials">
                            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                            <h1>Sign in</h1>
                            <span>Use your account</span>
                            <input class="sign-in-input" type="email" placeholder="Email" name="email"/>
                            <input class="sign-in-input" type="password" placeholder="Password" name="password"/>
                            <hr/>
                            <button class="sign-in-button">Sign In</button>
                        </form>
                    </div>
                    <div class="overlay-signin-container">
                        <div class="signin-overlay">
                            <div class="signin-overlay-panel">
                                <img src="images/logo.png" width={250} height={250} />
                                <h1 class="sub-header">RPC:: RED DE PROGRAMACIÓN COMPETITIVA</h1>
                            </div>
                        </div>
                    </div>
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