import { Component } from "react";

export default class competitorsField extends Component{
    constructor(props){
        super(props)
        this.state = {
            title : props.title,
            subs: props.items,
            auxField : "",
            deploy: false
        }
    }

    handleDelete = e=>{
        let i = this.state.subs.indexOf(e.target.name)
        console.log(i)
        let aux = this.state.subs;
        aux.splice(i,1)
        this.setState({
            subs: aux
        })
    }

    
    handleChange = e=>{
        this.setState({
            auxField: e.target.value
        })

    }

    handleSubmit = e=>{
        e.preventDefault()
        console.log(e.target.value)
        let aux = this.state.subs
        aux.push(this.state.auxField);
        
        this.setState({
            subs: aux,
            auxField: ""
        })
    }
    render(){
        if (this.state.deploy == false){
        return (
            <div >
                <h3>
                
                    {this.props.title}
                    <img src = {this.state.img}  onClick = {this.deployContent} width="30" height="30"></img>
                </h3>
                
                
                
            </div>
        )
     }else{
        return(
            <a >
                <h3>
                
                    {this.props.title}
                    <img src = {this.state.img} width="30" height="30" onClick = {this.hideContent}></img>

                    
                </h3>
                <ul >
                    {
                        this.state.subs.map((e)=>
                        <ol className={styles.task} >
                            <input type = "checkbox"/>
                            <b>{e}</b>
                            <button  name = {e}  onClick= {this.handleDelete} className={styles.btn} >X</button>
                            
                            
                        </ol>
                        )
                    }
                </ul>
                <form onSubmit={this.handleSubmit} onChange = {this.handleChange} >
                    <input type="text" placeholder="New task" value = {this.state.auxField} />
                    <button type="submit" > add new Task</button>
                </form>

            
                            
            </a>
        )
     }
    }
}