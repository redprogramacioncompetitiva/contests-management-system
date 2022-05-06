import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
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
            email: { label: "Email", type: "email", placeholder: "jsmith@example.com" },
            password: {  label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            // Add logic here to look up the user from the credentials supplied
            const user = { id: 1, name: "J Smith", email: "jsmith@example.com", password: "12345678" }
            console.log(req.body)
            console.log(credentials)
            if (credentials.email === 'jm1811324@gmail.com' && credentials.password === '12345678') {
              // Any object returned will be saved in `user` property of the JWT
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
                  token.id = user.id
              }
              return token
          },
          session: ({session, token}) => {
              if (token){
                  session.id = token.id
              }
              return session
          }
      },
      secret:"test",
      jwt:{
          secret: "test",
          encryption: true
      }
    });
