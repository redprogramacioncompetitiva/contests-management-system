import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

import CompetitionItem from "../../../components/users/CompetitionItem";
import CustomHeader from "../../../components/CustomHeader";

import style from "../../../styles/G6.module.css";

function userIndex({ data }) {
  const router = useRouter();
  const { data: session } = useSession();

  function onClick(e){
    console.log(e)
  }

  if (session && session.username == router.query.userId) {  
      return (
        <div className={style.bootStrapContainer}>
          <div id={style.competitionContainer}>
            <CustomHeader title="Competencias"></CustomHeader>

            <section id={style.competitionsEnabled}>
              <h2>Competencias en las que puedo inscribirme</h2>

              <div>
                {data.competitionsEnabled.map((e) => (
                  <CompetitionItem
                    id = {e.id}
                    competitionName={e.name}
                    description={e.description}
                    competitionStartDate={e.startInscription}
                    competitionEndDate={e.endInscription}
                    competitionEnrollStartDate={e.startDate}
                    competitionEnrollEndDate={e.endDate}
                    onClick = {onClick}
                  />
                ))}
              </div>
            </section>

            <section id={style.competitionsDisabled}>
              <h2>
                Competencias en las que <strong>no</strong> puedo inscribirme
              </h2>
              <div>
                {data.competitionsDisabled.map((e) => (
                  <CompetitionItem
                    id = {e.id}
                    competitionName={e.name}
                    description={e.description}
                    competitionStartDate={e.startInscription}
                    competitionEndDate={e.endInscription}
                    competitionEnrollStartDate={e.startDate}
                    competitionEnrollEndDate={e.endDate}
                    onClick = {onClick}
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

export default userIndex;
