import { Component } from "react";
import resume from '../Assets/resume.pdf'

export default class Resume extends Component{
    render(){
        return(
            <embed src={resume} width="800px" height="2100px" />
        )
    }
}