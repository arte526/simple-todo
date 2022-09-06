import React, { useState } from "react";
import './editModalWindow.scss';
import { editParams } from "../../server/api/dbMethods";

const EditModalWindow = (props) => {
    const {setModalStatus, setReload, idForPostEdit,setIdForPostEdit} = props;

    const [inputTextAddForm, setInputTextAddForm] = useState('');
    const [inputDateAddForm, setInputDateAddForm] = useState('');
    const [inputTimeAddForm, setInputTimeAddForm] = useState('');

    const params = {
        'description': inputTextAddForm,
        'date': inputDateAddForm,
        'time': inputTimeAddForm,
    };

    return(
        <div className={props.modalStatus ? 'modal active' : 'modal'}>
            <div className="editModalWindow">
                <form action="" onSubmit={(e)=>{
                    e.preventDefault(); 
                    editParams(idForPostEdit, params); 
                    setReload(true);
                    setIdForPostEdit(0);
                    setModalStatus(false);}}>
                <input 
                className="inputModal"
                placeholder={'Another task'}
                type="text" 
                onInput={(e)=>{
                    setInputTextAddForm(e.target.value)}}
                />
                <div className="timeanddate">
                    <input 
                    type="date" 
                    name="" 
                    id=""
                    onInput={(e)=>{
                        setInputDateAddForm(e.target.value)}}
                />
                    <input 
                    type="time"
                    name="" 
                    onInput={(e)=>{
                        setInputTimeAddForm(e.target.value)}}
                    id=""
                />
                </div>
                <div className="buttonsModal">
                    <button className="Apply"
                    onClick={(e)=>{
                        e.preventDefault();
                        editParams(idForPostEdit, params);
                        setReload(true);
                        setIdForPostEdit(0);
                        setModalStatus(false);
                    }}>Apply</button>
                    <button className="Cancel"
                    onClick={((e)=>{
                        e.preventDefault();
                        setReload(true);
                        setModalStatus(false);
                    })}
                    >Cancel</button>
                </div>  
                </form>   
            </div>
        </div>
    )
}

export default EditModalWindow;