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
      <div id={style.competitionContainer}>
        <CustomHeader title = "Competencias">
        </CustomHeader>

        <section id={style.competitionsEnabled}>
        <h2>Competencias en las que puedo participar</h2>
        <div>
          {data.competitions.map((e) => (
            <CompetitionItem className = "card"
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
        <h2>Competencias en las que <strong>no</strong> puedo participar</h2>
        <div>
          {data.competitions.map((e) => (
            <CompetitionItem className = "card"
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
