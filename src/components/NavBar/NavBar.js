import React from 'react';
import './NavBar.css';

const NavBar = props => (
    <div>
        <ul className="nav nav-bar justified-content">
            <li><a href="/">Game Time!</a></li>
            <li
                className={props.message.indexOf('incorrectly') !== -1 ? 
                    "desc-incorrect" : 
                    props.message.indexOf('correctly') !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
                {props.message}
            </li>
            <li>Score: <span style={{color: "yellow"}}>{props.currentScore}</span> | Top Score: {props.topScore}</li>
        </ul>
    </div>
)

export default NavBar;