import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import TodoList from './TodosList';
import InputTodo from './inputTodo';



const TodosLogic = () => {
  const [todos, setTodos] = useState([
    {
        id: 1,
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: 2,
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: 3,
        title: 'Deploy to live server',
        completed: false,
      },
  ]);

  const handleChange = (id)=> {
    setTodos((prevState)=>{
        prevState.map((todos)=>{
            if(todos.id === id){
                return {...todos, completed: !todos.completed}
            }
            return todos
        })
    })
}
const deleTodo = (id)=>{
    setTodos([...todos.filter((todos)=>{
        return todos.id !== id
    })])
}
const addTodosItem =(title)=>{
    const newTodo = {
        id:uuidv4(),
        title:title,
        completed:false
    }
    setTodos([...todos, newTodo])

}
const setUpdate =(setUpdatedTitle, id)=>{
    setTodos(
        todos.map((todo)=>{
            if(todo.id===id){
                todo.title = setUpdatedTitle
            }
            return todo
        })
    )

}
  return (
  <div>
  <InputTodo addTodosItem={addTodosItem}/>
  <TodoList todosProps={todos} handleChange={handleChange} deleTodo={deleTodo} setUpdate={setUpdate}/>
  </div>
  )
}
export default TodosLogic;
