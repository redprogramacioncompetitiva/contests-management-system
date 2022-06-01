import { FaAlignJustify, FaAngleRight, FaUserShield, FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
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
            <ul className="sidebar-list">
                <li>
                    <a href="/home">
                        <FaAngleRight id="sidebar-list-item" />
                        <span id="sidebar-link"> Home </span>
                    </a>
                    <div className="spacer"></div>
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
            </ul>
            <div className="user-logged">
                <FaUserShield />  USERNAME
            </div>

            <a href="/logout " className="logout-block">
                <span id="logout-text"> logout </span>
                <FaSignOutAlt id="logout-btn" />
            </a>
        </>
    )
}

export default Navbar