import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { routes } from '../router';

function Footer(props) {
    const { showActive,
            showCompleted,
            showAll,
            clearCompleted,
            tasks } = props

  const isComplited = tasks.filter(task => task.checked);
  const items = tasks.length - isComplited.length

  if(!tasks.length)return(<footer></footer>);
  return (
  <footer> 
      <div className="counter">{items} items left</div>
      <div
       className="sort-button"
       >
        <Link className="link"  to={routes.main} onClick={() => {showAll()}}>
          All
        </Link>
        <Link  className="link" to={routes.active} onClick={() => {showActive()}}>
           Active
       </Link>
        <Link  className="link" to={routes.completed} onClick={() => {showCompleted()}}>
           Completed
        </Link>
      </div>
      <button
       className="clearCompleted"
       onClick={() => {clearCompleted()}}
       style={!isComplited ? null  : {visibility:"visible"}}>
       Clear completed</button>
  </footer>
  )
}

export default Footer
