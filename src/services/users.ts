import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../constants";

export const usersApi = createApi({
  reducerPath: "usrsApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getUsersList: builder.query<any, string>({
      query: () => `/users`,
    }),
  }),
});

export const { useGetUsersListQuery } = usersApi;
