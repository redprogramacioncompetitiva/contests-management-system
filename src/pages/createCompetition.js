import Head from 'next/head'
import { useRef } from 'react'
import Image from 'next/image'


export default function CompetitionCreation() {

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

    // const handleFocus = (event) => {
    //     event.target.type = 'datetime-local'
    // }

    // const handleBlur = (event) => {
    //     event.target.type = 'text'
    // }


    return <div className='container-competition'>
            <Image 
            src = "/img/RPCLogo.jpeg" 
            alt="logo"
            width={270}
            height={200}
            />
        <form onSubmit={handlesubmit} className='form-container'>
            <h1 className="competition-title"><b>Compe</b>titions</h1>
                <label>Competition Name</label>
            <div>
                <input type="text" className="form-input name-text"  ref={nameRef} required></input>
            </div>
            <label>Inscription Dates</label>
            <div>
                <input type="datetime-local" className="form-input" ref={startInscRef} required></input>
                <input type="datetime-local" className="form-input right"  ref={endInscRef} required></input>
            </div>

            <label>Competition Dates</label>
            <div>
            <input type="datetime-local" className="form-input" ref={startCompRef} /*onFocus={handleFocus} onBlur={handleBlur}*/ required></input>
            <input type="datetime-local" className="form-input right" ref={endCompRef} required></input>
            </div>

            <label>Team Members</label>
            <div>
                <input type="number" min="1" className="form-input" ref={minRef} name = "minRef" placeholder='Min' required></input>
                <input type="number" min="1" className="form-input right" ref={maxRef} placeholder='   Max' required></input>
            </div>

            <label>Competition Description</label>
            <div>
                <textarea ref={descRef} className="textarea" required></textarea>
            </div>
            <input className="create-btn" type="submit" value="Crear"></input>
        </form>
    </div>
}
