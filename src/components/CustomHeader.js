import {Component} from "react"
import AppBar from '@mui/material/AppBar';
import Head from 'next/head'


export default class CustomHeader extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <Head>
                <title>{this.props.title}</title>
                <meta name="description" content={this.props.content} />

                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="../../styles/TeamsItems.module.css"/>
                            
            </Head>          
        )
    }
}
