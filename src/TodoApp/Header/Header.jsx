function Header() {
  return (
    <header>
      <div className='clear'>
        <i id='reset' className='fa fa-refresh'></i>
      </div>
      <h3 className='done-todo-count'>0 / 0</h3>
      <p id='date' className='date'>
        {new Date().toLocaleString()}
      </p>
      <img className='img-fluid cover-img' src='img/gold.jpg' alt='Cover' />
    </header>
  );
}

export default Header;
