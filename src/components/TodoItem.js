import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({
  itemProp, handleChange, deleteTodo, setUpdate,
}) => {
  const [editing, setEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(itemProp.title);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdateDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
      setUpdate(updatedTitle, itemProp.id);
    }
  };

  const viewMode = {};
  const editMode = {};
  let todoClass = '';

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
    todoClass = itemProp.completed ? 'completed' : '';
  }

  return (
    <div className={`content-items ${todoClass}`}>
      <ul>
        <li style={viewMode}>
          <input
            type="checkbox"
            checked={itemProp.completed}
            onChange={() => handleChange(itemProp.id)}
          />
          {itemProp.title}
        </li>
      </ul>
      <input
        className="textInput"
        type="text"
        value={updatedTitle}
        style={editMode}
        onChange={(e) => setUpdatedTitle(e.target.value)}
        onKeyDown={handleUpdateDone}
      />
      <section className="buttons">
        <button type="button" onClick={handleEditing}>Edit</button>
        <button type="button" onClick={() => deleteTodo(itemProp.id)}>Delete</button>
      </section>
    </div>
  );
};
TodoItem.propTypes = {
  itemProp: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};
export default TodoItem;
