import { useState } from 'react';
import Icon from '../UI/Icon';

function SingleTodo({ id, title, isDone: isDoneProp, onDelete, onToggle }) {
  // kai paspaudziu ant rutulioko ikoneles iskonsolinu "paspaudei"
  // kai paspaudziu ant <i className={`fa fa-home`} aria-hidden='true'></i> iskonsolinu "paspaudei"

  return (
    <li className={isDoneProp === true ? 'item line-through' : 'item'}>
      <Icon
        onClick={() => onToggle(id)}
        icon={isDoneProp === true ? 'fa-check-circle' : 'fa-circle-thin'}
      />
      <span className='text'>{title}</span>
      <Icon icon='fa-pencil' />
      <Icon onClick={() => onDelete(id)} icon='fa-trash' />
    </li>
  );
}

export default SingleTodo;
