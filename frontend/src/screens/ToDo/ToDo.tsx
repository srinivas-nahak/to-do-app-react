import Card from "../../components/UI/Card/Card";
import AddToDo from "./AddToDo/AddToDo";
import ToDoItem from "./ToDoItem/ToDoItem";
import styles from "./ToDo.module.css";
import { useGetTodosQuery } from "../../store/api/apiSlices";
import { TaskType } from "../../store/taskSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const ToDo: React.FC<{ isNotificationVisible: boolean }> = ({
  isNotificationVisible,
}) => {
  const tasksList = useSelector(
    (state: RootState) => state.taskReducer.tasksList
  );

  // const {
  //   data: tasksList,
  //   isLoading,
  //   isError,
  //   isSuccess,
  //   error,
  // } = useGetTodosQuery();

  return (
    <div
      className={styles["to-do-page"]}
      style={
        isNotificationVisible ? { marginTop: "3.5rem" } : { marginTop: "0" }
      }
    >
      <h1>ToDo List</h1>
      <AddToDo />
      {tasksList &&
        tasksList.map((task) => <ToDoItem key={task.id} task={task} />)}
      {!tasksList ||
        (tasksList.length === 0 && (
          <p style={{ textAlign: "center" }}>No Tasks Available!</p>
        ))}
    </div>
  );
};

export default ToDo;
