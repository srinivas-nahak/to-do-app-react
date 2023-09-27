import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../../../components/UI/Card/Card";
import styles from "./AddToDo.module.css";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FormEvent, useRef, useState } from "react";
import IconButton from "../../../components/UI/IconButton/IconButton";
import { useDispatch } from "react-redux";
import { taskAction } from "../../../store/taskSlice";
import { errorAction } from "../../../store/errorSlice";
import { useAddToDoMutation } from "../../../store/api/apiSlices";
import { notificationAction } from "../../../store/notificationSlice";

const AddToDo = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  // const [addToDo] = useAddToDoMutation();

  const inputHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const inputTask = inputValue.trim();

    if (inputTask.length === 0) {
      dispatch(errorAction.showErrorModal("The task can't be empty!"));
      return;
    }
    //Adding new task
    dispatch(
      taskAction.addTask({
        id: Math.random(),
        title: inputTask,
        isChecked: false,
      })
    );

    //Showing Notification
    dispatch(
      notificationAction.showNotification({
        showNotification: true,
        isError: false,
        message: "1 Task Added!",
      })
    );

    //Hiding the notification after 1.5seconds
    setTimeout(() => {
      dispatch(
        notificationAction.showNotification({
          showNotification: false,
          isError: false,
          message: "",
        })
      );
    }, 700);

    //Sending data to the server
    // addToDo({
    //   id: Math.random(),
    //   title: inputTask,
    //   isChecked: false,
    // });
    setInputValue("");
  };

  return (
    <Card className={styles["new-task-form-container"]}>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="task-input"
          placeholder="Enter your task..."
          onChange={inputHandler}
          value={inputValue}
        />
        <IconButton
          type="submit"
          icon={faUpload}
          className={styles["new-task-form__upload-button"]}
        />
      </form>
    </Card>
  );
};

export default AddToDo;
