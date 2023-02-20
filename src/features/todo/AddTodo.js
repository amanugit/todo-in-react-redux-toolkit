import { useState } from 'react';
import styles from './Todo.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './todoSlice';
export function AddTodo() {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();
    const selectTodods = useSelector(state =>  state.todo.todos);

    const onAddTodo = () => {
        if(!todo) {
            alert("Please enter todo ");
            return;
        }
        if(selectTodods.find(item =>  item.name.toLowerCase() === todo.toLowerCase() )) {
            alert("Task with this name already existed ");
            return;
        }
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const newTodo = {
            id: selectTodods.length + 1,
            name: todo,
            date_added: months[new Date().getMonth()] + " " + new Date().getDate() + ", " + new Date().getFullYear(),
            isCompleted: false
        }
        dispatch(addTodo(newTodo));
        setTodo("");
    }
    return (
        <div className={styles.addTodo}>
            <input type="text" name="todo" value={todo} className={styles.todoInput} placeholder="Enter task" onChange={(e) => setTodo(e.target.value)}></input>
            <button className={styles.addButton} onClick={onAddTodo}>Add Todo</button>
        </div>
    )
}
