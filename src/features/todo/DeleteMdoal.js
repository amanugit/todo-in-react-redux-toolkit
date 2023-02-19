import styles from './Todo.module.css';
import { useDispatch } from 'react-redux';
import { deleteTodo, closeDeleteModal } from './todoSlice';
export function DeleteMdoal({currentTodo}) {
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
    return (
        <div className={styles.deleteModalContainer}>
            <div className={styles.deleteModalContent}>
                <h5>Are you sure you want to delete {currentTodo.name} ?</h5>
                <div className={styles.deleteModalButtonsContainer}>
                    <button className={styles.cancelButton} onClick={handelCancel}>Cancel</button>
                    <button className={styles.deleteButton} onClick={handelDeleteTodo}>Delete</button>
                </div>
            </div>
        </div>
    )
}