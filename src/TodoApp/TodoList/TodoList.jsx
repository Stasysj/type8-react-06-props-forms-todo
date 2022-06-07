import SingleTodo from '../SingleTodo/SingleTodo';

const initTodos = [
  { id: 1, title: 'Do Sports', isDone: true },
  { id: 2, title: 'Go Hiking', isDone: false },
];

function TodoList() {
  return (
    <section className='content'>
      <ul id='list' className='list'>
        <SingleTodo {...initTodos[0]} />
        <SingleTodo {...initTodos[1]} />
      </ul>
      <div className='add-item'>
        <i id='add-todo-btn' className='fa fa-plus-circle' aria-hidden='true'></i>
        <input type='text' id='input' placeholder='Add todo' />
      </div>
    </section>
  );
}

export default TodoList;
