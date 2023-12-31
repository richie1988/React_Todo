import React from "react";

const TodoItem = ({ itemProp, handleChange, deleTodo}) => {
   
    return (
      <li>
        <input type="checkbox" checked={itemProp.completed} onChange={()=> handleChange(itemProp.id)} />
        <button onClick={()=> deleTodo(itemProp.id)}>Delete</button>
        {itemProp.title}
      </li>
    );
  };
  export default TodoItem;  