import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from 'redux/baseQuery';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery,
  tagTypes: ['posts'],
  endpoints: builder => ({
    getPosts: builder.query<any, void>({
      query() {
        return {
          url: '',
        };
      },
      providesTags: ['posts'],
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
