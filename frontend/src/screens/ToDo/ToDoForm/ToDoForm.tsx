import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../../../components/UI/Card/Card";
import styles from "./ToDoForm.module.css";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const ToDoForm = () => {
  return (
    <Card className={styles["form-container"]}>
      <form>
        <input type="text" name="task-input" placeholder="Enter your task..." />
        <FontAwesomeIcon
          icon={faUpload}
          className={styles["form__upload-button"]}
        />
      </form>
    </Card>
  );
};

export default ToDoForm;
