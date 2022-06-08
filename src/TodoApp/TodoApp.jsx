import Header from './Header/Header';
import TodoList from './TodoList/TodoList';

function TodoApp() {
  // atkelti mainTodoArray
  // atkelti funkcijas

  /** 1 / 5
   * {done: 1
   *  total: 5
   * }
   */
  function doneNotDoneTodos() {}
  return (
    <div className='container'>
      <Header />
      <TodoList />
    </div>
  );
}

export default TodoApp;
