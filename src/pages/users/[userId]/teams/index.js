import TeamsItem from "../../../../components/users/TeamsItem";
import CustomHeader from "../../../../components/CustomHeader";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import style from "../../../../styles/G6.module.css";

function teamsIndex({ data }) {
  const router = useRouter();
  const { data: session } = useSession();

  if (session && session.username == router.query.userId) {
    if (data.teams.length == 0) {
      return <h2>Ooops, parece que aún no tienes equipos :c</h2>;
    } else {
      return (
        <div>
          <CustomHeader title="Equipos" />
          <div>
            <div className={style.bootStrapContainer}>
              <h2>Equipos</h2>

              <form class="d-flex" className={style.searchBar}>
                <input
                  class="form-control me-2"
                  className={style.searchInput}
                  type="search"
                  placeholder="Nombre del equipo"
                  aria-label="Search"
                />
                <button
                  class="btn"
                  className={style.searchButton}
                  type="submit"
                >
                  Buscar
                </button>
              </form>
              <div className={style.teamContainer}>
                {data.teams.map((e) => (
                  <TeamsItem
                    teamName={e.teamName}
                    institution={e.institution}
                    members={e.members}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div>
        <h1>You shall not pass!</h1>
      </div>
    );
  }
}

teamsIndex.getInitialProps = async (ctx) => {
  var test = ctx.query.userId
  let config = {
    method: 'POST',
    
    body: test}
    //console.log(config.body)
    //console.log(ctx.query.userId)

  const testData = await fetch("http://localhost:3000/api/userIndex",config);
  const r = await testData.json();
  return { data: r };
};

export default teamsIndex;
