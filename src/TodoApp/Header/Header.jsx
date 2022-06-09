function Header(props) {
  console.log(props.counter().done);
  return (
    <header>
      <div className='clear'>
        <i onClick={props.onResetTodo} id='reset' className='fa fa-refresh'></i>
      </div>
      <h3 className='done-todo-count'>{`${props.counter().done} / ${props.counter().total}`}</h3>
      <p id='date' className='date'>
        {new Date().toLocaleString()}
      </p>
      <img className='img-fluid cover-img' src='img/gold.jpg' alt='Cover' />
    </header>
  );
}

export default Header;
