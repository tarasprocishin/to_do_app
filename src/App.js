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
      clickOnFooter: false,
      filterBy: 'all',
      items: 0
    }
  }

  inputTask = (event) => {
    this.setState({inputValue: event.target.value});
  }
 
  addTask = (event) => {
      this.setState(prevState => {
        let { inputValue, tasks, items } = prevState;
          if(inputValue === '')return;
          items += 1 
          return {
             inputValue:'',
             items: items,
             tasks: [
              ...tasks,
              {
                text: inputValue,
                checked:  false,
                id: items
              }]
           };
        });
      event.preventDefault();
    }

  removeTask = (index) => {
    this.setState(prevState => {
      const copy = [...prevState.tasks]
      copy.splice(index,1);
      let length = prevState.tasks.length;
      return {
              tasks: copy,
              item: length
            }
    })
  }

  handleChange = (id) => {
    this.setState(prevState => {
        const updatedTask = [...prevState.tasks].map(task => {
            if (task.id === id) {
                task.checked = !task.checked
            }
            return task
        })
        return { tasks: updatedTask }
      })
    }

  showActive = () => {
      this.setState({filterBy: 'active'})
    }

  showCompleted = () => {
      this.setState({filterBy: 'completed'})
    }

  showAll = () => {
      this.setState({filterBy: 'all'})
    }

  clearCompleted = () => {
      const { tasks } = this.state;
      let updatedTask = tasks.filter(task => {
        return task.checked === false;
      })
      this.setState({ tasks: updatedTask })
    }

    handleChangeFooter = () => {
      this.setState({clickOnFooter: true})
    }

  render(){
    const { filterBy, tasks, clickOnFooter } = this.state;
    let filtredTasks = [];

    switch (filterBy) {
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

    return (
      <div className="App">
          <h1>todos</h1>
          <div className="input-board">
            <form className="print-task"  onSubmit={this.addTask }>
              <label
               htmlFor="print-task"
               style={tasks.length ? {visibility:"visible"}:{visibility:"hidden"}}
               >
                  &#10095;
              </label>
                <input
                id="print-task"
                placeholder="What needs to be done?"
                type="text"
                onChange={this.inputTask}
                value={this.state.inputValue}
               />
            </form>

             <TodoItem
             tasks={filtredTasks}
             handleChange={this.handleChange}
             removeTask={this.removeTask}
              />
             <Footer
             tasks={tasks}
             clickOnFooter={clickOnFooter}
             showActive={this.showActive}
             showCompleted={this.showCompleted}
             showAll={this.showAll}
             clearCompleted={this.clearCompleted}
             handleChangeFooter={this.handleChangeFooter}
             />
          </div>

      </div>
      )}
}

export default App;
