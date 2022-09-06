import "./controlPanel.scss";
import {React, useState} from "react";
import {sendParams} from '../../server/api/dbMethods'


const ControlPanel = (props) => {

    const { setReload }= props;

    const [inputTextAddForm, setInputTextAddForm] = useState('');
    const [inputDateAddForm, setInputDateAddForm] = useState('');
    const [inputTimeAddForm, setInputTimeAddForm] = useState('');    

    const params = {
        'description': inputTextAddForm,
        'date': inputDateAddForm,
        'time': inputTimeAddForm,
        'type': 'add'
    }
    return (
        <form action="#" 
        onSubmit={(e)=>{
            e.preventDefault(); 
            setReload(true);
            sendParams(params);}} className='globalForm'>
            <div className="ControlPanel">
                <div className="ControlPanelFields">
                    <div className="ControlPanelFields-left">
                        <div className="addInputWrapper">
                            <input 
                            id="addInput" 
                            type="text" 
                            className="addInput" 
                            onInput={(e)=>{setInputTextAddForm(e.target.value);}}
                            placeholder="Add some task"/>
                        </div>
                    </div>
                    <div className="ControlPanelFields-right">
                        <div className="dateInputWrapper">
                            <input 
                            type="date" 
                            id="dateInput"
                            name="dateInput"
                            className="dateInput"
                            placeholder="Date"
                            onInput={(e)=>{setInputDateAddForm(e.target.value)}}
                            required
                            />
                        </div>
                        <div className="timeInputWrapper">
                            <input 
                            type="time"
                            className="timeInput"
                            onInput={(e)=>{setInputTimeAddForm(e.target.value)}}
                            placeholder="Time"/>
                        </div>

                        <div className="buttonAddWrapper">
                            <button

                            id="buttonAdd"
                            className="buttonInput"
                            onClick={(e)=>{
                                e.preventDefault(); 
                                setReload(true);
                                sendParams(params);}}
                            >Add</button>
                        </div>
                    </div> 
                </div>
            </div>
        </form>  
    )
}

export default ControlPanel;