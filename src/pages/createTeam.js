export default function Component() {

    let FIELDSAMOUNT = 0;

    let addCompetitorField = () => {
      var competitorsFields = document.getElementById("competitors-fields");
      var div = document.createElement('div');
      div.innerHTML = "<div id = 'field-"+(FIELDSAMOUNT+1)+"\'>"+
                      "<input type = 'text'></input>"+
                      "<button type = 'button'>-</button>"+
                      "</div>";
      competitorsFields.appendChild(div)
      FIELDSAMOUNT++;
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
            <button type = 'button' onMouseDown = {addCompetitorField}>+</button>
            <button type = 'button'>-</button>
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