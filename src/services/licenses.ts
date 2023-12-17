import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../constants";
import { ILicenseType } from "../types/licenses";

export const licensesApi = createApi({
  reducerPath: "licensesApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getLicensesList: builder.query<ILicenseType[], string>({
      query: () => `/licenses`,
    }),
    addNewLicense: builder.mutation({
      query: (newPost) => ({
        url: "/licenses",
        method: "POST",
        body: newPost,
      }),
    }),
  }),
});

export const { useGetLicensesListQuery, useAddNewLicenseMutation } =
  licensesApi;
