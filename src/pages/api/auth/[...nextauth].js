import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "../../../util/database";
import bcrypt from 'bcrypt'

export default nextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied



        //console.log(credentials)
        console.log(req)

        let response = await db.query('SELECT * FROM USERS WHERE EMAIL = $1', [credentials.email]);

        let stats = await bcrypt.compare(credentials.password, response.rows[0].password)

        const user = response.rows[0];
        console.log(user)
        if (user && stats == true) {
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.username = user.username,
          token.email = user.email,
          token.name = user.name,
          token.last_name = user.last_name,
          token.user_type = user.user_type
      }
      return token
    },
    session: ({ session, token }) => {
      if (token) {
        session.username = token.username,
          session.name = token.name,
          session.email = token.email,
          session.last_name = token.last_name,
          session.user_type = token.user_type
      }
      return session
    }
  },
  pages: {
    signIn: "/signIn"
  },
  secret: "pi1_Test",
  jwt: {
    secret: "pi1_Test",
    encryption: true
  }
});
