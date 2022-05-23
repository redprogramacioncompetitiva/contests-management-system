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

    let handlesubmit = async e => {
        e.preventDefault();
     
        let data = {
            name: "'" + nameRef.current.value + "'",
            description: "'" + descRef.current.value + "'",
            startInscriptionDate: startInscRef.current.value,
            endInscriptionDate: endInscRef.current.value,
            startDate: startCompRef.current.value,
            endDate: endCompRef.current.value,
            minMembers: minRef.current.value,
            maxMembers: maxRef.current.value
        }


        const response = await fetch('http://localhost:3000/api/competition/create', {    
            method: 'POST',
            body: JSON.stringify({ data }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        const responseData = await response.json();

        if(responseData.success){
            console.log(responseData.message)
            //window.location.href = '/'
        }
  
    }


    return <div className='container-competition'>
            <img src = "/img/RPCLogo.jpeg"></img>
                <h1>Crear competencia</h1>
        <form onSubmit={handlesubmit} className='form-container'>
            <div>
                <label>Nombre de la competencia</label>
                <input type="text" ref={nameRef} required></input>
            </div>
            <div>
                <label>Descripción de la competencia</label>
                <textarea ref={descRef} required></textarea>
            </div>
            <div>
                <label>Cuando empiezan las inscripciones a la competencia</label>
                <input type="datetime-local" ref={startInscRef} required></input>
            </div>
            <div>
                <label>Cuando termina las inscripciones a la competencia</label>
                <input type="datetime-local"  ref={endInscRef} required></input>
            </div>
            <div>
                <label>Cuando empieza la competencia</label>
                <input type="datetime-local" ref={startCompRef} required></input>
            </div>
            <div>
                <label>Cuando termina la competencia</label>
                <input type="datetime-local" ref={endCompRef} required></input>
            </div>
            <div>
                <label>Cantidad minima de miembros del equipo</label>
                <input type="number" min="1" ref={minRef} name = "minRef" required></input>
            </div>
            <div>
                <label>Cantidad maxima de miembros del equipo</label>
                <input type="number" min="1" ref={maxRef} required></input>
            </div>
            <input type="submit" value="Crear"></input>
        </form>
    </div>
}
