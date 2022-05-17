import {Component} from 'react'
import CompetitionItem from './CompetitionItem'

export default class CompetitionList extends Component{

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
                <CompetitionItem/>
                )}
                </div>
            </div>
        )
    }
}