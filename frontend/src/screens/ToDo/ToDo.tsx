import Card from "../../components/UI/Card/Card";
import AddToDo from "./AddToDo/AddToDo";
import ToDoItem from "./ToDoItem/ToDoItem";
import styles from "./ToDo.module.css";
import { useGetTodosQuery } from "../../store/api/apiSlices";
import { TaskType } from "../../store/taskSlice";
import { useEffect, useState } from "react";

const ToDo = () => {
  // const tasksList = useSelector(
  //   (state: RootState) => state.taskReducer.tasksList
  // );

  const {
    data: tasksList,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetTodosQuery();

  return (
    <div className={styles["to-do-page"]}>
      <h1>ToDo List</h1>
      <AddToDo />
      {tasksList &&
        tasksList.map((task) => <ToDoItem key={task.id} task={task} />)}
    </div>
  );
};

export default ToDo;
