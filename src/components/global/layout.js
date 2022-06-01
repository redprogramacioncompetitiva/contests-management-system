import Sidebar from "./Sidebar"

import { useSession, signIn, signOut } from "next-auth/react"
const Layout = ({ children }) => {
    const { data: session } = useSession()
    console.log("LAYOUT SESSION: " + session)

    if (session) {
        return (
            <div>
                <Navbar />
                {children}
            </div>
        )
    }

    //REAL RETURN:
    // return(
    //      <>
    //         { children }   
    //      </>
    // )

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

export default Layout