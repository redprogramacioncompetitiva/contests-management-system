import { Component } from "react"
import style from '../../styles/G6.module.css'

export default class TeamsItems extends Component {

    constructor(props) {
        super(props)
        this.state ={
            members : [this.props.members]
        }
    }

    render() {
        return (
            <section className={style.card}>
                <section className={style.cardBody}>
                    <h3>{this.props.teamName}</h3>
                    <h5>{this.props.institution}</h5>
                    <ul>
                        {this.state.members.map((e) =>
                            <li>{e}</li>
                        )}
                    </ul>
                </section>
            </section>
        )
    }

}