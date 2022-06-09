import Icon from '../UI/Icon';

function Header(props) {
  return (
    <header>
      <div className='clear'>
        <Icon icon='fa-refresh' onClick={props.onResetTodo} />
        {/* <i id='reset' className='fa fa-refresh'></i> */}
      </div>
      <h3 className='done-todo-count'>
        {props.doneTodos} / {props.total}
      </h3>
      <p id='date' className='date'>
        {new Date().toLocaleString()}
      </p>
      <img className='img-fluid cover-img' src='img/gold.jpg' alt='Cover' />
    </header>
  );
}

export default Header;
