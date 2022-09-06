import {React, useState, useEffect} from "react";
import ControlPanel from "../controlPanel/controlPanel";
import TodoList from "../todoList/todoList";
import { getPosts } from "../../server/api/dbMethods";
import { editParams } from "../../server/api/dbMethods";


const App = () => {

  const [modalActive, setModalActive] = useState(false);
  const [data, setData] = useState(null);
  const [requireReload, setRequireReload] = useState(false);
  const [postCanSend, setPostCanSend] = useState(false);
  const [postEditObj, setPostEditObj] = useState({});

  const getData = async () => {
      const res = await getPosts()
      const setToState = await setData(res)
      return setToState;
  }
  useEffect(() => {
      getData()
      setRequireReload(false)
  }, [requireReload])

  useEffect(()=>{
    if(postCanSend && (postEditObj !== {})){
      editParams(editParams);
      setPostCanSend(false);
    }
  }, [postCanSend, postEditObj])

  return (
    <div className="App">
      <ControlPanel
      setReload={setRequireReload}/>
      <TodoList
      modalActive={modalActive}
      setModalActive={setModalActive}
      data={data}
      setData={setData}
      requireReload={requireReload}
      setRequireReload={setRequireReload}
      setPostEditObj={setPostEditObj}
      setPostCanSend={setPostCanSend}/>
    </div>
  );
}

export default App;
