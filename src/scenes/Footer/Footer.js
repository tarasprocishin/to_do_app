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
        <Link className="link" to={routes.main}>
        <input type="radio" id="all" name="show" value="all"/>
        </Link>
        <label
         htmlFor="all"
         onClick={() => {showAll()}}
         >
          All
        </label>
        <Link  className="link" to={routes.active}>
        <input type="radio" id="active" name="show" value="active"/>
        </Link>
        <label
        htmlFor="active"
        onClick={() => {showActive()}}
        >
          Active
        </label>
        <Link  className="link" to={routes.completed}>
        <input type="radio" id="completed" name="show" value="completed"/>
        </Link>
        <label
         htmlFor="completed"
         onClick={() => {showCompleted()}}
         >
            Completed
        </label>
        
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
