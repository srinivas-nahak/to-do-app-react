export type TaskType = {
  id: number;
  title: string;
  isChecked: boolean;
};

export const dummyTasksList: TaskType[] = [
  { id: Math.random(), title: "Task One", isChecked: false },
  { id: Math.random(), title: "Task Two", isChecked: false },
  { id: Math.random(), title: "Task Three", isChecked: false },
  { id: Math.random(), title: "Task Four", isChecked: false },
  { id: Math.random(), title: "Task Five", isChecked: false },
];
