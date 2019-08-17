import React from 'react';
import '../../fonts/stylesheet.css'
import './Main.css';
import TodoItem from '../TodoItem/TodoItem';
import Footer from '../Footer/Footer';
import { compose, withStateHandlers, withState, withHandlers } from 'recompose';

const Layout = ({
  filterBy,
  tasks,
  onSubmit,
  onChange,
  inputValue,
  handleChange,
  removeTask,
  clearCompleted,
  showActive,
  showCompleted,
  showAll
}) => {

  return (
    <div className="App">
      <h1>todos</h1>
      <div className="input-board">
        <form className="print-task" onSubmit={onSubmit}>
          <label
            htmlFor="print-task"
            style={tasks.length ? { visibility: "visible" } : { visibility: "hidden" }}
          >
            &#10095;
            </label>
          <input
            id="print-task"
            placeholder="What needs to be done?"
            type="text"
            onChange={onChange}
            value={inputValue}
          />
        </form>

        <TodoItem
          tasks={tasks}
          handleChange={handleChange}
          removeTask={removeTask}
          filterBy={filterBy}
        />
        <Footer
          tasks={tasks}
          showActive={showActive}
          showCompleted={showCompleted}
          showAll={showAll}
          clearCompleted={clearCompleted}
        />
      </div>
    </div>
  )
}

const App = compose(
  withState('inputValue', 'setValue', ''),
  withState('tasks', 'setTasks', []),
  withState('items', 'setItems', 0),
  withHandlers({
    onChange: props => event => {
      props.setValue(event.target.value)
    },
    onSubmit: props => event => {
      event.preventDefault();
      if (!props.inputValue) return;
      let count = props.items;
      count += 1;
      props.setItems(count);
      props.setTasks([
        ...props.tasks,
        {
          text: props.inputValue,
          checked: false,
          id: props.items
        }]);
      props.setValue('')
    }
  }),

  withHandlers({
    handleChange: props => id => {
      const updatedTask = [...props.tasks].map(task => {
        if (task.id === id) task.checked = !task.checked;
        return task
      })
      props.setTasks(updatedTask)
    },
    removeTask: props => index => {
      const updatedTask = [...props.tasks]
      updatedTask.splice(index, 1);
      props.setTasks(updatedTask)
      props.setItems(props.tasks.length)
    },
    clearCompleted: props => () => {
      let updatedTask = props.tasks.filter(task => {
        return task.checked === false;
      })
      props.setTasks(updatedTask)
    }
  }),

  withStateHandlers({
      filterBy: 'all'
    },
    {
      showActive: () => () => ({ filterBy: 'active' }),
      showCompleted: () => () => ({ filterBy: 'completed' }),
      showAll: () => () => ({ filterBy: 'all' })
    })
)(Layout)

export default App;
