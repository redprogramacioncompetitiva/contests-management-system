import { Component } from "react"

export default function Component() {
  
    let addCompetitorField = () => {
      var competitorsFields = document.getElementById("competitors-fields");
      var div = document.createElement('div');
      
      competitorsFields.appendChild(div)
    }
    return (
    <div>
      <div className="row">
        <div className="column">
          <h1>Crea un nuevo equipo</h1>
          <h3>Vive nuevas experiencias</h3>
          <br/>
          <hr></hr>
          <br/>
          <h5>¿Cómo se llaman?</h5>
          <input type="text"></input>
          <h5>¿Quiénes son?</h5>
          <div id="competitors-fields">
            <input type = 'text' ></input>
            <button type = 'button' >-</button>
            <button type = 'button' onMouseDown = {addCompetitorField}>+</button>
          </div>
          <button>Crear equipo</button>
          <br/>
          <button>Cancelar</button>
        </div>
        <div className="column">
          <img alt="Picture"></img>
        </div>
      </div>
    </div>
    )
}