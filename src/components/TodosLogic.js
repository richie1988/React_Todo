import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  };

  const deleteTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  }; // Changed deleTodo to deleteTodo here

  const addTodosItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (setUpdatedTitle, id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: setUpdatedTitle };
      }
      return todo;
    }));
  };

  return (
    <div>
      <InputTodo addTodosItem={addTodosItem} />
      <TodoList
        todosProps={todos}
        handleChange={handleChange}
        deleteTodo={deleteTodo}
        setUpdate={setUpdate}
      />
    </div>
  );
};

export default TodosLogic;
