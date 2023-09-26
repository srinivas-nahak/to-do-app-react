import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TaskType } from "../taskSlice";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5183" }),
  endpoints: (builder) => ({
    getTodos: builder.query<TaskType[], void>({ query: () => "/api/tasks" }),
    addToDo: builder.mutation({
      query: (toDo: TaskType) => ({
        url: "/api/tasks",
        method: "POST",
        body: JSON.stringify(toDo),
      }),
    }),
  }),
});

export const { useGetTodosQuery } = apiSlice;
