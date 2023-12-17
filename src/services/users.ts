import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../constants";
import { IUsers } from "../types/users";

export const usersApi = createApi({
  reducerPath: "usrsApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getUsersList: builder.query<IUsers[], string>({
      query: () => `/users`,
    }),
  }),
});

export const { useGetUsersListQuery } = usersApi;
