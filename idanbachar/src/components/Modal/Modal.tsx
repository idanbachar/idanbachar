import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../redux/slices/modalSlice";
import { RootState } from "../../redux/store";
import styles from "./modal.module.css"

const Modal: React.FC = () => {
    const modal = useSelector((state: RootState) => state.modal.value);
    const dispatch = useDispatch();
    const closeModal = () => { dispatch(setModal({ ...modal, isVisible: false })) }
    return (
        modal?.isVisible ?
            <>
                <div
                    className={styles.modalOverlay}
                    onClick={closeModal}>
                    <div
                        className={styles.modalCard}
                        onClick={(e) => {
                            e.stopPropagation();
                        }}>
                        <span className="material-symbols-rounded" style={{
                            transform: "scale(1.5)",
                            left: "1rem",
                            top: "1rem",
                            position: "absolute",
                            cursor: "pointer"
                        }}
                            onClick={closeModal}>
                            close
                        </span>
                        {modal.component}
                    </div>
                </div>
            </> : null
    )
}

export default Modal;