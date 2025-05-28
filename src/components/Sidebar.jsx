
import React, { useState } from "react";

import "./Sidebar.css";
const Sidebar = (props) => {
    const data = props.todoItem
    
    const [name, setName] = useState(data.name);
    const [isImportant, setIsImportant] = useState(data.isImportant);
    const [isCompleted, setIsCompleted] = useState(data.isCompleted);
  return (
    <div className="sidebar">
      <form action="" className="sb-form">
        <div className="sb-form-field">
          <label htmlFor="sb-name">Todo name</label>
          <input type="text" id="sb-name" name="name" value={name} 
          onChange={(e) =>{
            setName(e.target.value);
          }}
            />
        </div>
        <div className="sb-form-field">
          <label htmlFor="sb-important">Is important?</label>
          <input type="checkbox" id="sb-important" name="isImportant" checked={isImportant}
          onChange={() => {
            setIsImportant(!isImportant);
          }}/>
        </div>
        <div className="sb-form-field">
          <label htmlFor="sb-completed">Is completed?</label>
          <input type="checkbox" id="sb-completed" name="isCompleted" checked={isCompleted}
          onChange={() =>{
            setIsCompleted(!isCompleted);
          }}/>
        </div>
      </form>
      <div className="sb-footer">
            <button onClick={() => {
                const todo = {
                    id: data.id,
                    name: name,
                    isImportant: isImportant,
                    isCompleted: isCompleted
                }
                props.handleChangeTodo(todo)}}
            >Save</button>
            <button onClick={props.handleCancelSidebar}
            >Cancel</button>
      </div>
    </div>
  );
};

export default Sidebar;
