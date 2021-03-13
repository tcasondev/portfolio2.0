import { Component } from "react";
import './NavBar.css';
import face from "../Assets/tannerface2.png"
import { Link } from "react-router-dom";

export default class NavBar extends Component {
    render(){
        return(
            <nav>
                <div className='logo'>
                    <img src={face} width="50" alt="profile-pic"/>
                </div>
                <div className='links'>
                    <ul className='linksList'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/resume">Resume</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}