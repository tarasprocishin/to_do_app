import React from 'react';
import '../css/Footer.css';

function Footer(props) {
  const {item,
        showActive,
        showCompleted,
        showAll,
        clearCompleted,
        isEmptyTaskBoard,
        completedTasks,
        clickOnFooter,
        handleChangeFooter} = props

const chekStyle = {
  border: "2px solid #e0e0e0",
  borderRadius: "5px"
}

console.log(clickOnFooter);

  const printFooter = ()=>{

    if(isEmptyTaskBoard){
      return (
        <>
          <div className="counter">{item} items left</div>
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
           style={!completedTasks[0] ? null :{visibility:"visible"}}>
           Clear completed</button>
      </>
    )}
    }



  return (
  <footer>
    {printFooter()}
  </footer>
  )

}

export default Footer
