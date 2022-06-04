/* eslint-disable @next/next/no-img-element */
import MemberField from "../components/teamsComponents/memberField";
import styles from "../styles/createTeam.module.css";
import CustomHeader from "../components/CustomHeader";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Component() {
  const router = useRouter();
  //const {data: session } = useSession();
  //const { data: session, status } = useSession()
  //const username = session;
  const username = "userfalso";

  function onClickCancel(){
    router.push('/');
  }

  let addCompetitorField = () => {};
  return (
    <div>
      <CustomHeader></CustomHeader>

      <div className={styles.row}>
        <div className={styles.column + " " + styles.widthX}>
          <h1 className={styles.h1}>Crea un nuevo equipo</h1>
          <h3 className={styles.h3}>Vive nuevas experiencias</h3>
          <br />
          <hr className={styles.hr}></hr>
          <div id="competitors-fields">
            <MemberField username={username} router ={router}></MemberField>
          </div>
          <button className={styles.cancelBtn} onClick = {onClickCancel}>Cancelar</button>
        </div>
        <div className={styles.column}>
          <img
            src="img/teamsImg.jpg"
            className={styles.homeImg}
            alt="Picture"
          ></img>
        </div>
      </div>
    </div>
  );
}