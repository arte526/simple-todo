import React from "react";
import { useState } from "react";
import EditModalWindow from "../editModalWindow/editModalWindow";
import TodoItem from "../todoItem/todoItem";
import "./todoList.scss"
import TodoListNav from "./todoListNav/todoListNav";

const TodoList = (props) => {
    const {modalActive, setModalActive, data, setRequireReload, setPostEditObj, setPostCanSend} = props;
    const [idForPostEdit, setIdForPostEdit] = useState(0);

    return (
        <>
            <div id="_TodoList" className="TodoList">
                <TodoListNav />
                <div className="DivlistTodo-wrapper">
                    <ul className="TodoList-wrapper">
                        {data?.data.map(post => {
                            return (<>
                                <TodoItem 
                                key={post.id}
                                id={post.id}
                                modalStatus={modalActive}
                                setModalStatus={setModalActive}
                                description={post.description}
                                time={post.time}
                                date={post.date}
                                setReload={setRequireReload}
                                setIdForPostEdit={setIdForPostEdit}
                                idForPostEdit={idForPostEdit}/>
                                </>)
                        })}
                    </ul>
                </div>
            </div>
            <EditModalWindow
            modalStatus={modalActive}
            setModalStatus={setModalActive}
            setReload={setRequireReload}
            setPostEditObj={setPostEditObj}
            setPostCanSend={setPostCanSend}
            idForPostEdit={idForPostEdit}
            setIdForPostEdit={setIdForPostEdit}
            />
        </>
    );
}

export default TodoList;