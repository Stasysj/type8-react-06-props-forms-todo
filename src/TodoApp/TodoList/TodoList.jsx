import SingleTodo from '../SingleTodo/SingleTodo';
// import { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';

// const initTodos = [
//   { id: 1, title: 'Do Sports', isDone: true },
//   { id: 2, title: 'Go Hiking', isDone: false },
//   { id: 3, title: 'Buy Sugar', isDone: false },
// ];

// function uuid() {
//   return 'td_' + Math.random().toString().split('.')[1];
// }

function TodoList(props) {
  return (
    <section className='content'>
      <ul id='list' className='list'>
        {props.todos.map((tObj) => (
          <SingleTodo
            key={tObj.id}
            {...tObj}
            onDelete={props.onDelete}
            onToggle={props.onTogleTodo}
            onUpdateTodo={props.onUpdateTodo}
          />
        ))}
      </ul>
      <AddTodo onAddTodo={props.onAddTodo} />
    </section>
  );
}

export default TodoList;
