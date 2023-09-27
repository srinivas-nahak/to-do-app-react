import { createSlice } from "@reduxjs/toolkit";

export type TaskType = {
  id: number;
  title: string;
  isChecked: boolean;
};

type TasksListType = {
  tasksList: TaskType[];
};

const dummyTaskList = [
  { id: Math.random(), title: "Be Calm", isChecked: false },
  { id: Math.random(), title: "Wake up Early", isChecked: false },
  { id: Math.random(), title: "Do Breakfast", isChecked: false },
  { id: Math.random(), title: "Do exercise", isChecked: false },
  { id: Math.random(), title: "Submit Resume", isChecked: false },
];

const initialState: TasksListType = {
  tasksList: dummyTaskList,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action: { payload: TaskType }) {
      //state.tasksList = [...state.tasksList, action.payload];

      state.tasksList.unshift(action.payload);
    },
    removeTask(state, action: { payload: number }) {
      state.tasksList = state.tasksList.filter(
        (task) => task.id !== action.payload
      );
    },
    checkTask(state, action: { payload: number }) {
      let tempTask: TaskType | undefined = undefined;
      state.tasksList = state.tasksList.filter((task) => {
        if (task.id === action.payload) {
          if (!task.isChecked) {
            tempTask = task;
            return;
          }

          task.isChecked = !task.isChecked;

          return task;
        }
        return task;
      });
      if (tempTask) {
        const task = tempTask as TaskType;
        task.isChecked = !task.isChecked;
        state.tasksList.push(tempTask!);
      }
    },
  },
});

export const taskAction = taskSlice.actions;

export default taskSlice.reducer;
