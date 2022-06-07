import Icon from '../UI/Icon';

function SingleTodo({ title }) {
  return (
    <li className='item '>
      <Icon icon='fa-circle-thin' />
      <span className='text'>{title}</span>
      <Icon icon='fa-pencil' />
      <Icon icon='fa-trash' />
    </li>
  );
}

export default SingleTodo;
