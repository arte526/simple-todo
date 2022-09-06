import React from "react";
import "./todoItem.scss"
import {ReactComponent as RemoveButton} from "../../buttons/done.svg"; 
import {ReactComponent as EditButton} from "../../buttons/edit.svg"; 
import { deletePost } from "../../server/api/dbMethods";

import { useState } from "react";

const TodoItem = (props) => {

    const {modalStatus, setModalStatus, description, date, time, id, setReload, idForPostEdit, setIdForPostEdit} = props;
    const months = {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December'
    };

    const dateInArr = (date.match(/\d{1,5}/g)+'').split(',');
    // const year = dateInArr[0];
    const month = months[dateInArr[1] < 10 ? dateInArr[1].slice(1) : dateInArr[1]];
    const day = dateInArr[2] < 10 ? dateInArr[2].slice(1) : dateInArr[2];

    const [isDone, setDone] = useState(false); 
    const [isEdit, setEdit] = useState(false);

    const editElement = (event) => { 
        event.preventDefault();
        setEdit(!isEdit);
    }

    const deleteElement = (event) => { 
        event.preventDefault();
        deletePost(id);
    }

    return (
        <li className="TodoItem">
            <div className="TodoItem-descriptionField">
                <p className="TodoItem-descriptionP">{description}</p>
            </div>
            <div className="TodoItem-date">
                <div className="dateForFlexDirection">
                    <p className="TodoItem-dateDay" style={{'margin': day < 9 ? '10px 57px 0px' : '10px 53px 0px'}}>{day}</p>
                    <p className="TodoItem-dateMonth">{month}</p>
                </div>
            </div>
            <div className="TodoItem-time">
                <p className="TodoItem-timeP">{time}</p>
            </div>
            <div className="TodoItem-buttons">
                <div className="TodoItem-editField">
                    <div className="TodoItem-editButton">
                        <a href="editButton" 
                        className={`TodoItem-deleteButton-link ${(modalStatus && id===idForPostEdit) ? 'editButtonAnimationOn' : 'editButtonAnimationOff'}`} 
                        onClick={(e) => {
                            editElement(e);  
                            setIdForPostEdit(id);
                            setModalStatus(true);
                            }}>
                        <EditButton/>
                        </a>
                    </div>
                </div>
                <div className="TodoItem-deleteField">
                    <div className="TodoItem-deleteButton">
                        <a href="deleteButton" 
                        className={`TodoItem-deleteButton-link ${(isDone) ? 'deleteButtonAnimation' : ''}`} 
                        onClick={(e) => {
                            deleteElement(e); 
                            setDone(true);
                        }}
                        onAnimationEnd={() => {
                            setDone(false);
                            setReload(true)}}>
                        <RemoveButton/>
                        </a>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default TodoItem;