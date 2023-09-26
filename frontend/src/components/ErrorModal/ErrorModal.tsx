import ReactDOM from "react-dom";
import Card from "../UI/Card/Card";
import styles from "./ErrorModal.module.css";
import { useDispatch } from "react-redux";
import { errorAction } from "../../store/errorSlice";

const ErrorModal: React.FC<{ errorMessage: string }> = ({ errorMessage }) => {
  const dispatch = useDispatch();

  const buttonClickHandler = () => {
    dispatch(errorAction.closeModal());
  };

  const backdrop = <div className={styles["error-modal-backdrop"]}></div>;
  const errorModal = (
    <Card className={styles["error-modal-container"]}>
      <h3>An Error Occurred!</h3>
      <h1>{errorMessage}</h1>
      <button onClick={buttonClickHandler}>Okay</button>
    </Card>
  );

  return (
    <>
      {ReactDOM.createPortal(
        errorModal,
        document.getElementById("overlay-root")!
      )}
      {ReactDOM.createPortal(
        backdrop,
        document.getElementById("backdrop-root")!
      )}
    </>
  );
};

export default ErrorModal;
