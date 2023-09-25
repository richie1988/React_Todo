import React from "react";
import { useState } from "react";

const TodoItem = ({ itemProp, handleChange, deleTodo, setUpdate}) => {
    const [editing, setEditing] = useState(false)

    const handleEditing =()=>{
        setEditing(true)
    }
    const handleUpdateDone =(event)=>{
        if(event.kay==="enter"){
            setEditing(false)
        }
    }

    let viewMode = {};
    let editMode = {};
    if(editing){
        viewMode.display = "none";
    } else {
        editMode.display = "none";
    }
   
    return (
      <li>
        <div className="content" style={viewMode}>
        <input type="checkbox" checked={itemProp.completed} onChange={()=> handleChange(itemProp.id)} />
        <button onClick={handleEditing}>Edit</button>
        <button onClick={()=> deleTodo(itemProp.id)}>Delete</button>
        {itemProp.title}
        </div>
        <input className="textInput" type="text" value={itemProp.title} style={editMode} onChange={(e)=> setUpdate(e.target.value, itemProp.id)} onKeyDown={handleUpdateDone}/>
      </li>
    );
  };
  export default TodoItem;  