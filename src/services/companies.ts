import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../constants";
import { ICompanies } from "../types/companies";

export const companiesApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCompanyApiById: builder.query<ICompanies, string>({
      query: (id) => `/companies/${id}`,
    }),
    getCompaniesList: builder.query<ICompanies[], string>({
      query: () => `/companies`,
    }),
  }),
});

export const { useGetCompanyApiByIdQuery, useGetCompaniesListQuery } =
  companiesApi;
