import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TaskType } from "../taskSlice";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5183" }),
  tagTypes: ["todos"],
  endpoints: (builder) => ({
    getTodos: builder.query<TaskType[], void>({
      query: () => "/api/tasks",
      //transformResponse: (data: TaskType[]) => data.map(),
      providesTags: ["todos"],
    }),
    addToDo: builder.mutation({
      query: (toDo: TaskType) => ({
        url: "/api/tasks/",
        method: "POST",
        body: toDo,
      }),
      invalidatesTags: ["todos"],
    }),
    updateToDo: builder.mutation({
      query: (toDo: TaskType) => ({
        url: `/api/tasks/${toDo.id}`,
        method: "PATCH",
        body: toDo,
      }),
    }),
    deleteToDo: builder.mutation({
      query: (id: number) => ({
        url: `/api/tasks/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["todos"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddToDoMutation,
  useUpdateToDoMutation,
  useDeleteToDoMutation,
} = apiSlice;
