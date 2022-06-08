import { useState, useRef } from 'react';
import Icon from '../UI/Icon';

function AddTodo(props) {
  const inputEl = useRef();
  // AddTodo sukurti state
  const [newTodoInput, setNewTodoInput] = useState('');
  // AddTodo susieti state su input
  // kai AddTodo kvieciam handleAddTodo argumentu paduojam input reiksme (isState)

  function handleNewTodo() {
    props.onAddTodo(newTodoInput);
    setNewTodoInput('');
    // sufokusuoti kursoriu i input
    inputEl.current.focus();
  }

  return (
    <div className='add-item'>
      <Icon onClick={handleNewTodo} icon='fa-plus-circle' />
      <input
        ref={inputEl}
        type='text'
        placeholder='Add todo'
        onChange={(event) => setNewTodoInput(event.target.value)}
        value={newTodoInput}
      />
    </div>
  );
}

export default AddTodo;
