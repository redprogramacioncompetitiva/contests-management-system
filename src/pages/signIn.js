import React from "react";
import {Providers, signIn, getSession, csrfToken} from "next-auth"

export default function signIn({Providers,csrfToken}){
    return <container>
        <Heading as="h1" textAling="center">
            RPC
        </Heading>
        <Box alignContent="center" justifyContent="center" marginTop={12}>
            <Box className="signIn-form">
                <form method="post" action="/api/auth/signin/user">
                    <Input name="credentials" type="hidden" defaultValue={Credentials}></Input>
                    <label> Email
                    <Input type="text" id="email" name="email"/>
                    </label>
                    <Button type="submit"> </Button>
                </form>
            </Box>
        </Box>
    </container>
}

signIn.getInitialProps = async(context) =>{
    const{req,res} = context;
    const session = await getSession({req});
    
    if(session && res && session.accessToken){
        res.writehead(302,{
            location:"/"
        });
        res.end()
        return;
    }
    return{
        session: undefined,
        providers: await providers(context)
    }
}