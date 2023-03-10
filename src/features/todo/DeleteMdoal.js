import styles from './Todo.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, closeDeleteModal } from './todoSlice';
export function DeleteMdoal() {
    const IsDeleteModalOPen = useSelector(state => state.todo.isDeleteModalOPen);
    const currentTodo = useSelector(state => state.todo.currentTodo);
    const dispatch = useDispatch();
    const handelDeleteTodo = () => {
        dispatch(deleteTodo(currentTodo));
        handelCancel();
    }
    const handelCancel = () => {
        dispatch(closeDeleteModal({
            currentTodo: {},
            isDeleteModalOPen: false
        }));
    }
    return IsDeleteModalOPen ? (
        <div className={styles.deleteModalContainer}>
            <div className={styles.deleteModalContent}>
                <h5>Are you sure you want to delete {currentTodo.name} ?</h5>
                <div className={styles.deleteModalButtonsContainer}>
                    <button className={styles.cancelButton} onClick={handelCancel}>Cancel</button>
                    <button className={styles.deleteButton} onClick={handelDeleteTodo}>Delete</button>
                </div>
            </div>
        </div>
    ) : null
}