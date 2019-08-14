import React from 'react';
import '../css/Footer.css';

function Footer(props) {
    const { showActive,
            showCompleted,
            showAll,
            clearCompleted,
            clickOnFooter,
            handleChangeFooter,
            tasks } = props

  const chekStyle = {
    border: "2px solid #e0e0e0",
    borderRadius: "5px"
  }

  const isComplited = tasks.filter(task => task.checked);
  const items = tasks.length - isComplited.length

  if(!tasks.length)return(<footer></footer>);
  return (
  <footer> 
      <div className="counter">{items} items left</div>
      <div
       className="sort-button"
       onClick={()=>{handleChangeFooter()}}
       >
        <input type="radio" id="all" name="show" value="all"/>
        <label
         htmlFor="all"
         onClick={() => {showAll()}}
         style={clickOnFooter ? null : chekStyle}
         >All</label>

        <input type="radio" id="active" name="show" value="active"/>
        <label
        htmlFor="active"
        onClick={() => {showActive()}}
        >Active</label>

        <input type="radio" id="completed" name="show" value="completed"/>
        <label
         htmlFor="completed"
         onClick={() => {showCompleted()}}
         >Completed</label>
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
