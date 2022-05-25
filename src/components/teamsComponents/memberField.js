import { Component } from "react";
import styles from "../../styles/createTeam.module.css";

export default class MemberField extends Component {
  constructor(props) {
    super(props);
    this.state = { members: [""] };
  }

  handleDelete = (e) => {
    if (this.state.members.length != 1) {
      let aux = this.state.members;
      let index = aux.indexOf(e.target.name);
      aux.splice(index, 1);
      this.setState({
        members: aux,
      });
    }
  };

  handleAdd = (e) => {
    let value = e.target.name;
    let length = this.state.members.length;

    if (value.length !== 0) {
      if(!(this.state.members[length-1] === "")){
        let aux = this.state.members;
        aux.push("");
        for (let i = 0; i < aux.length; i ++){
          while (aux[i].charAt(aux[i].length-1) == ' ') 
          aux[i] = aux[i].substring(0,aux[i].length-1)
        }
        this.setState({
        members: aux,
        });
      } 
    }
  };

  handleChanged = (e) => {
    console.log(e)
    let aux = this.state.members;
    let index = aux.indexOf(e.target.name);
    aux[index] = e.target.value; 
    
    
    

    if (aux[index].charAt(0) == ' ') aux[index] = aux[index].replace(" ", "")


      aux = aux.filter((item,index)=>{
      return aux.indexOf(item) === index;
    })

    this.setState({
      members: aux,
    });
  };

  render() {
    const membersList = this.state.members.map((e) => (
      <div key={this.state.members.indexOf(e)}>
        <input
          type="text"
          onChange={this.handleChanged}
          name={e}
          value={e}
        ></input>
        <button
          type="button"
          name={e}
          onClick={this.handleDelete}
          className={styles.button}
        >
          -
        </button>
        <button
          type="button"
          name={e}
          onClick={this.handleAdd}
          className={styles.button}
        >
          +
        </button>
      </div>
    ));
    return <div>{membersList}</div>;
  }
}
