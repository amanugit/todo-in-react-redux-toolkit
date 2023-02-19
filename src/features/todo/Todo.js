import styles from './Todo.module.css';
import { useDispatch } from 'react-redux';
import { openDeleteModal, updateTodo } from './todoSlice';
export function Todo({ item }) {
    const dispatch = useDispatch();
    const onDeleteTodo = (todo) => {
        dispatch(openDeleteModal({
            currentTodo: todo,
            isDeleteModalOPen: true,
        }));
    }

    const onToggleTodo = (todo) => {
        dispatch(updateTodo({
            todo, 
            isCompleted: !todo.isCompleted
        }));
    }
    return (
        <div className={styles.todoItem} onDoubleClick={() => onToggleTodo(item)}>
            <div>
                <h3 className={item.isCompleted ? styles.Completed : styles.notCompleted}>{item.name}</h3>
                <p><small>{item.date_added}</small></p>
            </div>

            <div>
                <button className={styles.deleteButton} onClick={() => {onDeleteTodo(item)}}>Delete</button>
            </div>
        </div>
    )
}