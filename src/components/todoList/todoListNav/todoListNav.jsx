import React from "react";
import './todoListNav.scss'

const TodoListNav = () => {
    return(
        <div className="TodoList-nav-wrapper">
            <ul className="TodoList-nav">
            <li className="nav-name">
                <p className="nav-name-label">Task description</p>
            </li>
            
            <li className="nav-date">
                <p className="nav-date-label">Date</p>
            </li>
            <li className="nav-time">
                <p className="nav-time-label">Time</p>
            </li>
            <li className="nav-probka"></li>
            </ul>
        </div>
    )
}

export default TodoListNav;