import { useState } from 'react';
import Icon from '../UI/Icon';

function SingleTodo({ id, title, isDone: isDoneProp, onDelete }) {
  const [isDone, setIsDone] = useState(isDoneProp);

  // kai paspaudziu ant rutulioko ikoneles iskonsolinu "paspaudei"
  // kai paspaudziu ant <i className={`fa fa-home`} aria-hidden='true'></i> iskonsolinu "paspaudei"

  function clickHandler() {
    // kai paspaudziu ant rutulioko ikoneles pakeiciu isDone statusa i priesinga
    console.log('paspaudei');
    // pakeisti statusa i true
    // setIsDone(true); // kai state nepriklauso nuo pries tai buvusios
    // pakeisti statusa i priesinga dabartiniam
    // setIsDone(!isDone); // kai state nepriklauso nuo pries tai buvusios
    setIsDone((prevIsDone) => !prevIsDone); // kai state priklauso nuo pries tai buvusios
  }

  return (
    <li className={isDone === true ? 'item line-through' : 'item'}>
      <Icon
        onClick={clickHandler}
        icon={isDone === true ? 'fa-check-circle' : 'fa-circle-thin'}
      />
      <span className='text'>{title}</span>
      <Icon icon='fa-pencil' />
      <Icon onClick={() => onDelete(id)} icon='fa-trash' />
    </li>
  );
}

export default SingleTodo;
