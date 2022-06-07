import SingleTodo from '../SingleTodo/SingleTodo';
import { useState } from 'react';

const initTodos = [
  { id: 1, title: 'Do Sports', isDone: true },
  { id: 2, title: 'Go Hiking', isDone: false },
];

function TodoList() {
  const [todoArray, setTodoArray] = useState(initTodos);

  // sukurti funkcija kuri prideda nauja todo
  // { id: 3, title: 'Buy Sugar', isDone: false }
  // iskvieciam funkcija su myguko paspaudimu

  // sukurti funkcija toggleTodo(id)
  // pasidarom todoArray kopija
  // paiesiskom todoArray kopijoj objekto su id lygiu id(argumenta)
  // surade todo objekta pakeicia jo isDone i priesinga
  // atnaujinam state su kopija pakeistu objektu

  return (
    <section className='content'>
      <ul id='list' className='list'>
        <SingleTodo {...todoArray[0]} />
        <SingleTodo {...todoArray[1]} />
        <SingleTodo {...{ id: 3, title: 'Buy Sugar', isDone: false }} />
      </ul>
      <div className='add-item'>
        <i id='add-todo-btn' className='fa fa-plus-circle' aria-hidden='true'></i>
        <input type='text' id='input' placeholder='Add todo' />
      </div>
    </section>
  );
}

export default TodoList;
