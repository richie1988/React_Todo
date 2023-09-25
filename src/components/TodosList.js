import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({todosProps, handleChange, deleTodo, setUpdate}) =>{
    return (
        <ul>
        {todosProps.map((todos)=>(
            <TodoItem key={todos.id} itemProp={todos} handleChange={handleChange} deleTodo={deleTodo} setUpdate={setUpdate}/>
    ))}
        </ul>
    )
}

export default TodoList