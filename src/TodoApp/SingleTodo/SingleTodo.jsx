import { useState } from 'react';
import Icon from '../UI/Icon';

function SingleTodo({ id, title, isDone: isDoneProp, onDelete, onToggle, onUpdateTodo }) {
  // kai paspaudziu ant rutulioko ikoneles iskonsolinu "paspaudei"
  // kai paspaudziu ant <i className={`fa fa-home`} aria-hidden='true'></i> iskonsolinu "paspaudei"
  const [isEditOn, setIsEditOn] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  function singleTodoEdit() {
    if (isEditOn === false) {
      setIsEditOn(true);
      // return;
    }
    if (isEditOn === true) {
      setIsEditOn(false);
      onUpdateTodo(id, editedTitle);
    }
    // setIsEditOn((prevState) => !prevState);
  }
  return (
    <li className={isDoneProp === true ? 'item line-through' : 'item'}>
      <Icon
        onClick={() => onToggle(id)}
        icon={isDoneProp === true ? 'fa-check-circle' : 'fa-circle-thin'}
      />
      {isEditOn === false ? (
        <span className='text'>{title}</span>
      ) : (
        <input
          onChange={(event) => setEditedTitle(event.target.value)}
          type='text'
          value={editedTitle}
        />
      )}

      <Icon onClick={singleTodoEdit} icon='fa-pencil' />
      <Icon onClick={() => onDelete(id)} icon='fa-trash' />
    </li>
  );
}

export default SingleTodo;
