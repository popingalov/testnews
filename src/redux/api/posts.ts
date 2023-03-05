import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from 'redux/baseQuery';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery,
  tagTypes: ['posts'],
  endpoints: builder => ({
    getPosts: builder.query<any, { page?: number; limit?: number }>({
      query: ({ page = 1, limit = 10 }) => {
        return {
          url: '/posts',
          params: {
            _page: page,
            _limit: limit,
          },
        };
      },
      providesTags: ['posts'],
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
