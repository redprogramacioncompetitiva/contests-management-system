import { Component } from "react"
import style from '../../styles/G6.module.css'

export default class TeamsItems extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className={style.teamSection}>
                <section className={style.teamBody}>
                    <h3>{this.props.teamName}</h3>
                    <h5>{this.props.institution}</h5>
                    <ul>
                        {this.props.members.map((e) =>
                            <li>{e}</li>
                        )}
                    </ul>
                </section>
            </section>
        )
    }

}