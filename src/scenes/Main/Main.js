import React from 'react';

import './Main.css';
import { Text } from '../../Components/Text/Text';
import { ToDoInput } from '../../Components/ToDoInput/ToDoInput'

const App = () => {

  return (
    <div className="App">
      <Text size="64px" >Todos</Text>
      <ToDoInput onAdd={(todo) => console.log(todo)} />

    </div>
  )
}

export default App;
