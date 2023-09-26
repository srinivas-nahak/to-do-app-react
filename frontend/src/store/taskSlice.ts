import { createSlice } from "@reduxjs/toolkit";

export type TaskType = {
  id: number;
  title: string;
  isChecked: boolean;
};

type TasksListType = {
  tasksList: TaskType[];
};

const initialState: TasksListType = {
  tasksList: [{ id: Math.random(), title: "Dummy Task", isChecked: false }],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action: { payload: TaskType }) {
      //state.tasksList = [...state.tasksList, action.payload];

      state.tasksList.push(action.payload);
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
