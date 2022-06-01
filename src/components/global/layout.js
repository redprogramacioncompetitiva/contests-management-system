import Sidebar from "./Sidebar"

import { useSession, signIn, signOut } from "next-auth/react"
const Layout = ({ children }) => {
    const { data: session } = useSession()

    if (session) {
        return (
            <div className="layout-container">
                <div className="sidebar-main-containter">
                    <Sidebar />
                </div>
                <div className="children-container">
                    {children}
                </div>
            </div>
        )
    }

    //NO SESSION RETURN:

    return(
        <>
           { children }   
        </>
   )

}

export default Layout