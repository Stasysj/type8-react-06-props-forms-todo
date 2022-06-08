import { useState } from 'react';
import Icon from '../UI/Icon';

function AddTodo(props) {
  // AddTodo sukurti state
  const [newTodoInput, setNewTodoInput] = useState('');
  // AddTodo susieti state su input
  // kai AddTodo kvieciam handleAddTodo argumentu paduojam input reiksme (isState)
  return (
    <div className='add-item'>
      <Icon onClick={props.onAddTodo} icon='fa-plus-circle' />
      <input
        type='text'
        placeholder='Add todo'
        onChange={(event) => setNewTodoInput(event.target.value)}
        value={newTodoInput}
      />
    </div>
  );
}

export default AddTodo;
