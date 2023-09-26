import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../../../components/UI/Card/Card";
import styles from "./AddToDo.module.css";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FormEvent, useRef } from "react";
import IconButton from "../../../components/UI/IconButton/IconButton";
import { useDispatch } from "react-redux";
import { taskAction } from "../../../store/taskSlice";
import { errorAction } from "../../../store/errorSlice";
import {
  useAddToDoMutation,
  useDeleteToDoMutation,
  useUpdateToDoMutation,
} from "../../../store/api/apiSlices";

const AddToDo = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  //const dispatch = useDispatch();

  const [addToDo] = useAddToDoMutation();
  const [deleteToDo] = useAddToDoMutation();

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (inputRef.current) {
      const inputTask = inputRef.current.value.trim();

      if (inputTask === "") {
        //dispatch(errorAction.showErrorModal("The task can't be empty!"));
        return;
      }

      // dispatch(
      //   taskAction.addTask({
      //     id: Math.random(),
      //     title: inputTask,
      //     isChecked: false,
      //   })
      // );

      //Sending data to the server
      addToDo({
        id: Math.random(),
        title: inputTask,
        isChecked: false,
      });
      inputRef.current.value = "";
    }
  };

  return (
    <Card className={styles["new-task-form-container"]}>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="task-input"
          placeholder="Enter your task..."
          ref={inputRef}
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
