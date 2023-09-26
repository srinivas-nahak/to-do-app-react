import Card from "../../../components/UI/Card/Card";
import IconButton from "../../../components/UI/IconButton/IconButton";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "./ToDoItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { TaskType, taskAction } from "../../../store/taskSlice";

const ToDoItem: React.FC<{ task: TaskType }> = ({ task }) => {
  const { id, title, isChecked } = task;

  const dispatch = useDispatch();

  const checkHandler = () => {
    // dispatch(taskAction.checkTask(id));
  };

  const removeHandler = () => {
    // dispatch(taskAction.removeTask(id));
  };

  const tickClass = isChecked
    ? `${styles["to-do-item-tick"]} ${styles["to-do-item-tick-checked"]}`
    : `${styles["to-do-item-tick"]}`;

  return (
    <Card className={styles["to-do-item-container"]} onClick={checkHandler}>
      <Card
        className={tickClass}
        onClick={(e) => {
          e.stopPropagation();
          checkHandler();
        }}
      >
        <FontAwesomeIcon icon={faCheck} />
      </Card>

      <div
        className={styles["to-do-item-title"]}
        style={isChecked ? { textDecoration: "line-through" } : {}}
      >
        {title}
      </div>
      <IconButton
        icon={faXmark}
        className={styles["to-do-item-delete"]}
        onClick={removeHandler}
      />
    </Card>
  );
};

export default ToDoItem;
