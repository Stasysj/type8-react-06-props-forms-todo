import SingleTodo from '../SingleTodo/SingleTodo';
import { useState } from 'react';

const initTodos = [
  { id: 1, title: 'Do Sports', isDone: true },
  { id: 2, title: 'Go Hiking', isDone: false },
  { id: 3, title: 'Buy Sugar', isDone: false },
];

function TodoList() {
  const [mainTodoArray, setMainTodoArray] = useState(initTodos);

  // sukurti funkcija kuri prideda nauja todo
  // { id: 3, title: 'Buy Sugar', isDone: false }
  // iskvieciam funkcija su myguko paspaudimu

  // sukurti funkcija toggleTodo(id)
  // iskviesti handleToggleTodo kai pasdauziam ant burbuliuko
  function handleToggleTodo(toggleId) {
    // console.log('handleToggleTodo happened', toggleId);
    // pasidarom todoArray deeper kopija
    // const mainTodoArrayCopy = mainTodoArray.map((tObj) =>
    //   tObj.id === toggleId ? { ...tObj, isDone: !tObj.isDone } : { ...tObj }
    // );
    // // paiesiskom todoArray kopijoj objekto su id lygiu id(argumenta)
    // const found = mainTodoArrayCopy.find((tObj) => tObj.id === toggleId);
    // console.log('found ===', found);
    // // surade todo objekta pakeicia jo isDone i priesinga
    // found.isDone = !found.isDone;

    // atnaujinam state su kopija pakeistu objektu
    setMainTodoArray((prevTodoArray) =>
      prevTodoArray.map((tObj) =>
        tObj.id === toggleId ? { ...tObj, isDone: !tObj.isDone } : { ...tObj }
      )
    );
  }

  // delete
  // atnaujinti state su kopija state kurioje nera to el kuri trynem
  function handleDelete(deleteId) {
    console.log('handleDelete was initiated by todo with id', deleteId);

    // isfiltruoti mainTodoArray ir gauti masyva kuriame nera objeto kurio id === deleteId
    const filtered = mainTodoArray.filter((tObj) => tObj.id !== deleteId);
    console.log('filtered ===', filtered);
    setMainTodoArray(filtered);
  }

  return (
    <section className='content'>
      <ul id='list' className='list'>
        {mainTodoArray.map((tObj) => (
          <SingleTodo
            key={tObj.id}
            {...tObj}
            onDelete={handleDelete}
            onToggle={handleToggleTodo}
          />
        ))}
      </ul>
      <div className='add-item'>
        <i id='add-todo-btn' className='fa fa-plus-circle' aria-hidden='true'></i>
        <input type='text' id='input' placeholder='Add todo' />
      </div>
    </section>
  );
}

export default TodoList;
