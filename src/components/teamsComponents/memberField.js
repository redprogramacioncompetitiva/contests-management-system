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
    let empty = value.slice(0, 1);
    if (empty !== " ") {
      empty = value.slice(value.length - 1, value.length);
      if (empty !== " ") {
        if (value.length !== 0) {
          let aux = this.state.members;
          aux.push("");
          this.setState({
            members: aux,
          });
          if (aux.indexOf(value) == aux.length - 2) {
            e.target.disabled = true;
          } else {
            e.target.disabled = false;
          }
        }
      }
    }
  };

  handleChanged = (e) => {
    let aux = this.state.members;
    let index = aux.indexOf(e.target.name);
    aux[index] = e.target.value;
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
          disabled={false}
          onClick={this.handleDelete}
          className={styles.button}
        >
          -
        </button>
        <button
          type="button"
          disabled={false}
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
