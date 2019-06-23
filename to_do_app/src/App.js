import React from 'react';
import './fonts/stylesheet.css'
import './css/App.css';

import TodoItem from './Components/TodoItem';
import Footer from './Components/Footer';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      inputValue: '',
      tasks: [],
      activeTasks: [],
      completedTasks: [],
      item: 0,
      clickOnFooter: false
    }

    this.addTask = this.addTask.bind(this)
    this.inputTask = this.inputTask.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.removeTask = this.removeTask.bind(this)
    this.showActive = this.showActive.bind(this)
    this.showCompleted = this.showCompleted.bind(this)
    this.showAll = this.showAll.bind(this)
    this.clearCompleted = this.clearCompleted.bind(this)
    this.handleChangeFooter = this.handleChangeFooter.bind(this)


  }

  inputTask(event) {
    this.setState({inputValue: event.target.value});
  }

  addTask(event) {
    if(event.keyCode === 13){
      const {inputValue, item} = this.state;
      this.setState(prevState => {
        if(inputValue === '')return;
          const copy = prevState.tasks.concat({})
          let count = prevState.item + 1
          copy[item]['text'] = inputValue;
          copy[item]['checked'] = false;
          copy[item]['id'] = item
          return {
             inputValue:'',
             tasks: copy,
             activeTasks: copy,
             item: count
           };
        })
      }
    }

  removeTask(index) {
    this.setState(prevState => {
      let count = prevState.item;
      const copy = [...prevState.tasks]
      if(copy[index].checked === false){
        count--;
      }
       copy.splice(index,1);
       const updateActiveTask =  this.serchActivTask(copy);
       const updateCompletedTask = this.updateCompletedTask(copy)



      return {tasks: copy,
              item: count,
              activeTasks: updateActiveTask,
              completedTasks: updateCompletedTask
              }
    })

  }


serchActivTask(arr){
  const filtredArr = arr.filter((el) => {
      return el.checked === true ? false : true
      })
      return filtredArr;
}

updateCompletedTask(arr){
  const filtredArr = arr.filter((el) => {
      return el.checked === true ? true : false
      })
      return filtredArr;
}


  handleChange(id) {
    this.setState(prevState => {
      let count = prevState.item;
        const updatedTask = prevState.tasks.map(task => {
            if (task.id === id) {
                task.checked === false ? count --: count ++;
                task.checked = !task.checked
            }
            return task
        })

      const updateActiveTask =  this.serchActivTask(prevState.tasks);
      const updateCompletedTask = this.updateCompletedTask(prevState.tasks)

        return {
            tasks: updatedTask,
            item: count,
            activeTasks: updateActiveTask,
            completedTasks: updateCompletedTask
        }
      })
    }

    showActive () {
      this.setState({tasks: this.state.activeTasks})
    }

    showCompleted () {
      this.setState({tasks: this.state.completedTasks})
    }

    showAll () {
      const {completedTasks, activeTasks} = this.state;
      this.setState({tasks: activeTasks.concat(completedTasks)})
    }

    clearCompleted () {
      const {activeTasks} = this.state;
      this.setState({
        tasks: activeTasks,
        completedTasks: []
      })
    }

    handleChangeFooter (){
      const {clickOnFooter} = this.state;

      this.setState({clickOnFooter: true})
    }

  render(){
    const {tasks, item, completedTasks, activeTasks, clickOnFooter} = this.state;
    const isEmptyTaskBoard = !(!completedTasks[0] && !activeTasks[0]);


    return (
      <div className="App">
          <h1>todos</h1>
          <div className="input-board">
            <div className="print-task">
              <label
               htmlFor="print-task"
               style={isEmptyTaskBoard ? {visibility:"visible"}:{visibility:"hidden"}}
               >
                  &#10095;
              </label>
                <input
                id="print-task"
                placeholder="What needs to be done?"
                type="text"
                onChange={this.inputTask}
                value={this.state.inputValue}
                onKeyDown={this.addTask }
               />
            </div>

             <TodoItem
             tasks={tasks}
             handleChange={this.handleChange}
             removeTask={this.removeTask}
              />
             <Footer
             isEmptyTaskBoard={isEmptyTaskBoard}
             activeTasks={activeTasks}
             completedTasks={completedTasks}
             tasks={tasks}
             item={item}
             clickOnFooter={clickOnFooter}
             showActive={this.showActive}
             showCompleted={this.showCompleted}
             showAll={this.showAll}
             clearCompleted={this.clearCompleted}
             handleChangeFooter={this.handleChangeFooter}
             />
          </div>

      </div>



  );
}
}

export default App;
