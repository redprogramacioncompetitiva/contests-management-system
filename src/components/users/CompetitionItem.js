import { Component } from "react"
import style from '../../styles/G6.module.css'

export default class CompetitionItems extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className={style.card}>
                <section className={style.cardBody}>
                    <h3>{this.props.competitionName}</h3>
                    <br/>
                    <h5>{this.props.description}</h5>
                    <br/>
                    <section className="container">
                    <ul>
                        <li>{this.props.competitionStartDate}</li>
                        <li>{this.props.competitionEndDate}</li>
                    </ul>
                    <ul>
                        <li>{this.props.competitionEnrollStartDate}</li>
                        <li>{this.props.competitionEnrollEndDate}</li>
                    </ul>
                    <ul>
                        <li>{this.props.competitionStatus}</li>
                        <li>{this.props.competitionStatus}</li>
                    </ul>
                    </section>
                </section>
            </section>
        )
    }

}