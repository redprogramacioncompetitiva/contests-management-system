import MemberField from '../components/teamsComponents/memberField'
import styles from '../styles/createTeam.module.css'

export default function Component() {
  
    let addCompetitorField = () => {
          
    }
    return (
    <div>
      <div className={styles.row}>
        <div className={styles.column + ' ' + styles.widthX}>
          <h1 className={styles.h1}>Crea un nuevo equipo</h1>
          <h3 className={styles.h3}>Vive nuevas experiencias</h3>
          <br/>
          <hr className={styles.hr}></hr>
          <br/>
          <h5 className={styles.h5}>¿Cómo se llaman?</h5>
          <input className={styles.inputWidth} type="text" placeholder='Nombre del equipo...'></input>
          <h5 className={styles.h5}>¿Quiénes son?</h5>
          <div id="competitors-fields">
            <MemberField title = "soy un titulo">
              soy lo que está dentro
            </MemberField>
          </div>
          <button className={styles.submitBtn}>Crear equipo</button>
          <br/>
          <button className={styles.cancelBtn}>Cancelar</button>
        </div>
        <div className={styles.column}>
          <img src='img/teamsImg.jpg' className={styles.homeImg} alt="Picture"></img>
        </div>
      </div>
    </div>
    )
}