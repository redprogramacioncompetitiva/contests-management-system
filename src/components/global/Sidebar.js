import { FaAlignJustify, FaAngleRight, FaUserShield, FaSignOutAlt } from "react-icons/fa";

import { useSession, signIn, signOut } from "next-auth/react"
const Sidebar = () => {
    const { data: session } = useSession()
    return (
        <>
            <div className="sidebar-logo">
                <div className="logo">
                    <img src="images/logo.png" width="60" height="60" />
                    <div className="sidebar-title">
                        Red de programación competitiva
                    </div>
                </div>
                <div id="menu-btn"><FaAlignJustify /></div>
            </div>
            <div className="sidebar-list">
                <ul>
                    <li>
                        <a href="/home">
                            <FaAngleRight id="sidebar-list-item" />
                            <span id="sidebar-link"> Home </span>
                        </a>
                    </li>
                    <div className="spacer"></div>
                    <li>
                        <a href="/register">
                            <FaAngleRight id="sidebar-list-item" />
                            <span id="sidebar-link"> Registrar </span>
                        </a>
                    </li>
                    <div className="spacer"></div>
                    <li>
                        <a href="/createTeam">
                            <FaAngleRight id="sidebar-list-item" />
                            <span id="sidebar-link"> Crear equipo </span>
                        </a>
                    </li>
                    <div className="spacer"></div>
                    <li>
                        <a href="/createCompetition">
                            <FaAngleRight id="sidebar-list-item" />
                            <span id="sidebar-link"> Crear Competencia </span>
                        </a>
                    </li>
                    <div className="spacer"></div>
                    <li>
                        <a href="/createTeam">
                            <FaAngleRight id="sidebar-list-item" />
                            <span id="sidebar-link"> Crear equipo </span>
                        </a>
                    </li>
                    <div className="spacer"></div>
                    <li>
                        <a href="/users/1">
                            <FaAngleRight id="sidebar-list-item" />
                            <span id="sidebar-link"> Usuarios </span>
                        </a>
                    </li>
                    <div className="spacer"></div>
                    <li>
                        <a href="/home/team/add">
                            <FaAngleRight id="sidebar-list-item" />
                            <span id="sidebar-link"> Agregar a Equipo </span>
                        </a>
                    </li>
                    <div className="spacer"></div>
                    <li>
                        <a href="/competitions/details">
                            <FaAngleRight id="sidebar-list-item" />
                            <span id="sidebar-link"> Detalles de competencias </span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="user-logged">
                <FaUserShield />  user
            </div>

            <div className="logout-block">
                <span id="logout-text">  </span>
                <button onClick={signOut} id="logout-btn"><p>signout <FaSignOutAlt /></p> </button>
            </div>
        </>
    )
}

export default Sidebar