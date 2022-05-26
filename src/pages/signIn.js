import { Container } from "@mui/material"
import { getCsrfToken } from "next-auth/react"

export default function SignIn({ csrfToken }) {
    return (
        <Container>
            <div>
              <img src="images/logo.png" width={50} height={50} />
              <h1>Sign In</h1>
            </div>
            <form method="post" action="/api/auth/callback/credentials">
                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                <label>
                    Username
                    <input name="username" type="text" />
                </label>
                <label>
                    Password
                    <input name="password" type="password" />
                </label>
                <button type="submit">Sign in</button>
            </form>
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