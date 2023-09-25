import React from "react";
import {useState} from "react";

function InputTodo ({addTodosItem}){
    const[title, setTitle] = useState('')
    const[message, setMessage] = useState('')

    const handleChange =(e) =>{
        setTitle(e.target.value)
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        if(title.trim()){
        addTodosItem(title)
        setTitle('')
        setMessage('')
        }else{
            setMessage("please Add todos")
        }
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add Todos" value={title} onChange={handleChange}/>
        <button>Submit</button>
        </form>
        <span>{message}</span>
        </>

    )
}

export default InputTodo