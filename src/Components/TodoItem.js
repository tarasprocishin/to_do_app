import React from 'react';

import '../css/TodoItem.css';


function TodoItem(props) {
  const {tasks, handleChange, removeTask} = props

  const completedStyle = {
    display: "block",
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
}

const chekStyle = {
  background:`url(${require('../icons/checked.svg')})`,
  backgroundRepeat:"no-repeat",
  backgroundPosition: "center"
}



  return(
    <ul className="todo-item-list" >
    {
      tasks.map((item, index) => (

        <li key={index} className="todo-item">

        <label
        style={item.checked ? chekStyle :null }
        className="checkbox" >

          <input
          id="chek"
           type="checkbox"
           checked={item.checked}
           onChange={() => handleChange(item.id) }
            />

        <p style={item.checked ? completedStyle: null} > {item.text} </ p>
        </label>
        <button onClick={()=>removeTask(index)}>  &#10005; </button>

        </li>
      ))}
    </ul>
  )

}
export default TodoItem;
