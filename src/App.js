import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <header>
          <div className='clear'>
            <i id='reset' className='fa fa-refresh'></i>
          </div>
          <h3 className='done-todo-count'></h3>
          <p id='date' className='date'>
            Kraunasi...
          </p>
          <img className='img-fluid cover-img' src='img/gold.jpg' alt='Cover' />
        </header>
        <section className='content'>
          <ul id='list' className='list'></ul>
          <div className='add-item'>
            <i id='add-todo-btn' className='fa fa-plus-circle' aria-hidden='true'></i>
            <input type='text' id='input' placeholder='Add todo' />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
