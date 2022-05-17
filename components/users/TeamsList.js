import {Component} from 'react'
import TeamsItem from './TeamsItem'

export default class TeamsList extends Component{

    constructor(props){
        super(props)
        this.state = {
            items : []
        }
    }
    render(){
        
        return (
            <div>
                <div>
                {this.state.items.map((e)=>
                <TeamsItem/>
                )}
                </div>
            </div>
        )
    }
}