import { User } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface DeleteUserResponse {
  success: boolean;
  id: string;
}

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  tagTypes: ["User"],

  endpoints: (build) => ({
    getDoctors: build.query<User[], void>({
      query: () => "doctors",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "User" as const, id })),
              { type: "User", id: "DOCTORS" },
            ]
          : [{ type: "User", id: "DOCTORS" }],
    }),

    getUsers: build.query<User[], void>({
      query: () => "users",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "User" as const, id })),
              { type: "User", id: "LIST" },
            ]
          : [{ type: "User", id: "LIST" }],
    }),

    getUser: build.query<User, string>({
      query: (id) => `users/${id}`,
      providesTags: (_result, _error, id) => [{ type: "User", id }],
    }),

    addUser: build.mutation<User, Partial<User>>({
      query: (body) => ({
        url: "users",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),

    updateUser: build.mutation<User, Partial<User> & Pick<User, "id">>({
      query: ({ id, ...patch }) => ({
        url: `users/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: "User", id }],
    }),

    deleteUser: build.mutation<DeleteUserResponse, string>({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => [{ type: "User", id }],
    }),
  }),
});

export const {
  useGetDoctorsQuery,
  useGetUsersQuery,
  useGetUserQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApi;
