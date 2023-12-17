import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../constants";

export const companiesApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCompanyApiById: builder.query<any, string>({
      query: (id) => `/companies/${id}`,
    }),
    getCompaniesList: builder.query<any, string>({
      query: () => `/companies`,
    }),
  }),
});

export const { useGetCompanyApiByIdQuery, useGetCompaniesListQuery } =
  companiesApi;
