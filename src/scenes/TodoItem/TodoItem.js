import React from 'react';
import './TodoItem.css'; 
import { routes } from '../router';



function TodoItem( props ) {
  const { tasks, handleChange, removeTask, match } = props
  console.log(match.path);

  const completedStyle = {
    display: "block",
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  }

  const chekStyle = {
    background: `url(${require('../../icons/checked.svg')})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  }

  let filtredTasks = filterTask(match.path, tasks);

  return (
    <ul className="todo-item-list" >
      {
        filtredTasks.map((item, index) => (

          <li key={index} className="todo-item">

            <label
              style={item.checked ? chekStyle : null}
              className="checkbox"
            >

              <input
                id="chek"
                type="checkbox"
                checked={item.checked}
                onChange={() => handleChange(item.id)}
              />
            </label>
            <p style={item.checked ? completedStyle : null} > {item.text} </ p>

            <button onClick={() => removeTask(index)}>  &#10005; </button>

          </li>
        ))}
    </ul>
  )
}

function filterTask(filter, tasks) {
  let filtredTasks = [];
  switch (filter) {
    case '/to_do_app/completed':
      filtredTasks = tasks.filter(task => task.checked);
      break;
    case '/to_do_app/active':
      filtredTasks = tasks.filter(task => !task.checked);
      break;
    case '/to_do_app/':
      filtredTasks = tasks;
      break;
  }
  return filtredTasks;
}


export default TodoItem;
