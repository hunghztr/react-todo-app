
import React, { useState } from "react";

import "./Sidebar.css";
import { CATEGORY_ITEMS } from "./constants";  
const Sidebar = (props) => {
    const data = props.todoItem
    
    const [name, setName] = useState(data.name);
    const [isImportant, setIsImportant] = useState(data.isImportant);
    const [isCompleted, setIsCompleted] = useState(data.isCompleted);
    const [category, setCategory] = useState(data.category);
    console.log(category)
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
        <div className="sb-form-field">
          <label htmlFor="sb-category">Category</label>
          <select name="" id="sb-category" onChange={(e) =>{
            setCategory(e.target.value);
          }}>
              {CATEGORY_ITEMS.map( i =>{
                return (
                  <option value={i.id} key={i.id}>
                    {i.label}
                  </option>
                );
              })}
          </select>
        </div>
      </form>
      <div className="sb-footer">
            <button onClick={() => {
                const todo = {
                    id: data.id,
                    name: name,
                    isImportant: isImportant,
                    isCompleted: isCompleted,
                    category: category,
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
