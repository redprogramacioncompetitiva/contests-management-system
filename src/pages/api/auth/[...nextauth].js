import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "../../../util/database";
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
            password: {  label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            // Add logic here to look up the user from the credentials supplied
            
            console.log(req)
            const User = { id: 1, name: "J Smith", email: "jsmith@example.com", roll: 'a01' }
            db.connect();
            let response = await db.query('SELECT * FROM USUARIO WHERE EMAIL = $1 AND PASSWORD = $2',[credentials.email,credentials.password]);
            db.end();
            const user = response.rows[0];
            console.log("Usuario"+user)
            if (user) {
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
          jwt: async({token,user}) =>{
              if (user){
                  token.id = user.id,
                  token.email = user.email,
                  token.name = user.name,
                  token.roll = user.roll
              }
              return token
          },
          session: ({session, token}) => {
              if (token){
                  session.id = token.id,
                  session.name = token.name,
                  session.email = token.email,
                  session.roll = token.roll
              }
              return session
          }
      },
      secret:"pi1_Test",
      jwt:{
          secret: "pi1_Test",
          encryption: true
      }
    });
