import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Todo.module.css';
import { Todo } from './Todo';
export function Todos() {
  const todos = useSelector(state => state.todo.todos);
  return (
    <div className={styles.todoContainer}>
      {
        todos.length > 0 ? <p style={{fontStyle: 'italic'}}>Double click on item to toggle completed or not</p> : <p style={{fontStyle: 'italic'}}>Add to do to see more taks</p>
        todos.map(todo => (
          <Todo item={todo} key={todo.id}/>
        ))
      }
    </div>
  )
}
