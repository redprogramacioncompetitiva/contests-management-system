import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { Redirect } from "react-router-dom";

import CompetitionItem from "../../../components/users/CompetitionItem";
import CustomHeader from "../../../components/CustomHeader";

import style from "../../../styles/G6.module.css";

function userIndex({ data }) {
  const router = useRouter();
  const { data: session } = useSession();

  if (session && session.username == router.query.userId) {
    return (
      <div>
        <nav
          id={style.navBar}
          className="navbar navbar sticky-top navbar-expand-lg navbar-dark bg-dark"
        >
          <a className="navbar-brand" href="#">
            RPC
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Inicio <span class="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Competencias
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-bell-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </a>
              </li>             
            </ul>
          </div>
        </nav>

        <div id={style.competitionContainer}>
          <CustomHeader title="Competencias"></CustomHeader>

          <section id={style.competitionsEnabled}>
            <h2>Competencias en las que puedo participar</h2>

            <div>
              {data.competitionsEnabled.map((e) => (
                <CompetitionItem
                  competitionName={e.name}
                  description={e.description}
                  competitionStartDate={e.startInscription}
                  competitionEndDate={e.endInscription}
                  competitionEnrollStartDate={e.startDate}
                  competitionEnrollEndDate={e.endDate}
                />
              ))}
            </div>
          </section>

          <section id={style.competitionsDisabled}>
            <h2>
              Competencias en las que <strong>no</strong> puedo participar
            </h2>
            <div>
              {data.competitionsDisabled.map((e) => (
                <CompetitionItem
                  competitionName={e.name}
                  description={e.description}
                  competitionStartDate={e.startInscription}
                  competitionEndDate={e.endInscription}
                  competitionEnrollStartDate={e.startDate}
                  competitionEnrollEndDate={e.endDate}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  } else {
    //return <Redirect to='/'/>;
    return (
      <div>
        <h1>You shall not pass!</h1>
      </div>
    );
  }
}

userIndex.getInitialProps = async (ctx) => {
  const testData = await fetch("http://localhost:3000/api/userIndex");
  const r = await testData.json();
  return { data: r };
};

export default userIndex;
