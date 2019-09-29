import React from 'react';
import './TodoItem.css';


function TodoItem(props) {
  const {tasks, handleChange, removeTask} = props

  const completedStyle = {
    display: "block",
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
    }

const chekStyle = {
  background:`url(${require('../../icons/checked.svg')})`,
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
          className="checkbox"
         >

          <input
           id="chek"
           type="checkbox"
           checked={item.checked}
           onChange={() => handleChange(item.id) }
          />
        </label>
        <p style={item.checked ? completedStyle: null} > {item.text} </ p>

        <button onClick={()=>removeTask(index)}>  &#10005; </button>

        </li>
      ))}
    </ul>
  )

}
export default TodoItem;
