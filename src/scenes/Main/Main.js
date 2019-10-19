import React from 'react';
import './Main.css';
import TodoItem from '../TodoItem/TodoItem';
import Footer from '../Footer/Footer';
import { compose, withState, withHandlers } from 'recompose';

const Layout = ({
  tasks,
  onSubmit,
  onChange,
  inputValue,
  handleChange,
  removeTask,
  clearCompleted,
  match
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
          match={match}
        />
        <Footer
          tasks={tasks}
          clearCompleted={clearCompleted}
          match={match}
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
)(Layout)

export default App;
