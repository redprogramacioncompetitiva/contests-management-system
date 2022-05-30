/* eslint-disable @next/next/no-img-element */
import MemberField from "../components/teamsComponents/memberField";
import styles from "../styles/createTeam.module.css";
import CustomHeader from "../components/CustomHeader";

export default function Component() {
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
            <MemberField></MemberField>
          </div>
          <button className={styles.cancelBtn}>Cancelar</button>
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