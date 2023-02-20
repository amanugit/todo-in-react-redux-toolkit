import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import {store} from './app/store';
import { Todos } from './features/todo/Todos';
import {DeleteMdoal} from './features/todo/DeleteMdoal';
import { AddTodo } from './features/todo/AddTodo';
function App() {
  return (
    <Provider store={store}>
      <div className='app-container'>
        <AddTodo/>
        <Todos/>
        <DeleteMdoal/>
      </div>
    </Provider>
  );
}

export default App;
