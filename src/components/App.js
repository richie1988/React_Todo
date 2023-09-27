import React from 'react';
import TodosLogic from './TodosLogic';
import './Todo.css';

function App() {
  return (
    <div className="main-container">
      <h2>My Today&apos;s TodoList</h2>
      <TodosLogic />
    </div>
  );
}

export default App;
