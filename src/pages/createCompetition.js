import Head from 'next/head'
import { useRef } from 'react'


export default function competitionCreation() {

    const nameRef = useRef()
    const descRef = useRef()
    const startInscRef = useRef()
    const endInscRef = useRef()
    const startCompRef = useRef()
    const endCompRef = useRef()
    const minRef = useRef()
    const maxRef = useRef()


    let handlesubmit = e => {
        e.preventDefault();
        //console.log(typeof endCompRef.current.value)
        //console.log(new Date(endCompRef.current.value).toLocaleString())
        let competition = {
            name: nameRef.current.value,
            description: descRef.current.value,
            startInscriptionDate: new Date(startInscRef.current.value).toLocaleString(),
            endInscriptionDate: new Date(endInscRef.current.value).toLocaleString(),
            startDate: new Date(startCompRef.current.value).toLocaleString(),
            endDate: new Date(endCompRef.current.value).toLocaleString(),
            minMembers: minRef.current.value,
            maxMembers: maxRef.current.value
        }

        //La variable competencia es lo que le dariamos al al back para que se suba a la db

        //console.log(competition)
        //console.log(competition.endDate.toLocaleString().replace("T", ' '))
        //console.log(typeof (competition.endDate))
        //console.log(competition.endDate.toLocaleDateString())
    }


    return <div className='container-competition'>
            <img src = "/img/RPCLogo.jpeg"></img>
                <h1>Crear competencia</h1>
        <form onSubmit={handlesubmit} className='form-container'>
            <div>
                <label>Nombre de la competencia</label>
                <input type="text" ref={nameRef}></input>
            </div>
            <div>
                <label>Descripción de la competencia</label>
                <textarea ref={descRef}></textarea>
            </div>
            <div>
                <label>Cuando empiezan las inscripciones a la competencia</label>
                <input type="datetime-local" ref={startInscRef}></input>
            </div>
            <div>
                <label>Cuando termina las inscripciones a la competencia</label>
                <input type="datetime-local" ref={endInscRef}></input>
            </div>
            <div>
                <label>Cuando empieza la competencia</label>
                <input type="datetime-local" ref={startCompRef}></input>
            </div>
            <div>
                <label>Cuando termina la competencia</label>
                <input type="datetime-local" ref={endCompRef}></input>
            </div>
            <div>
                <label>Cantidad minima de miembros del equipo</label>
                <input type="number" min="1" ref={minRef}></input>
            </div>
            <div>
                <label>Cantidad maxima de miembros del equipo</label>
                <input type="number" min="1" ref={maxRef}></input>
            </div>
            <input type="submit" value="Crear"></input>
        </form>
    </div>
}
