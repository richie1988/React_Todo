import React, { useState } from 'react';
import PropTypes from 'prop-types';

function InputTodo({ addTodosItem }) {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodosItem(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('please Add todos');
    }
  };
  return (
    <div className="input-cotnainer">
      <h3>TODOLIST</h3>
      <form className="form-inpute" onSubmit={handleSubmit}>
        <input type="text" placeholder="Add Todo's" value={title} onChange={handleChange} />
        <button type="submit" className="submit">Add</button>
      </form>
      <span>{message}</span>
    </div>
  );
}

InputTodo.propTypes = {
  addTodosItem: PropTypes.func.isRequired,
};
export default InputTodo;
