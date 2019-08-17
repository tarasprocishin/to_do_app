import React from 'react';
import './TodoItem.css';



function TodoItem(props) {
  const { tasks, handleChange, removeTask, filterBy } = props

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

  let filtredTasks = filterTask(filterBy, tasks);



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

function filterTask( filter, tasks) {
  let filtredTasks = [];
  switch (filter) {
    case 'completed':
      filtredTasks = tasks.filter( task => task.checked);
    break;
    case 'active':
      filtredTasks = tasks.filter( task => !task.checked);
    break;
    case 'all':
      filtredTasks = tasks;
    break;
  } 
  return filtredTasks;
}


export default TodoItem;
