import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from 'redux/baseQuery';
interface IDeletePostParams {
  id: number;
}
export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery,
  tagTypes: ['posts'],
  endpoints: builder => ({
    getPosts: builder.query<IPost[], { page?: number; limit?: number }>({
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
    deletePost: builder.mutation<void, IDeletePostParams>({
      query: ({ id }) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['posts'],
    }),
  }),
});

export const { useGetPostsQuery, useDeletePostMutation } = postsApi;
