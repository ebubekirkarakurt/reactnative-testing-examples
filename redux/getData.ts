import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const getData = createApi({
  reducerPath: 'getData',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        url: '/todos',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetTodosQuery } = getData;
