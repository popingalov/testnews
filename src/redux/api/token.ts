import { createApi } from '@reduxjs/toolkit/query/react';
import { useDispatch } from 'react-redux';
import baseQuery from 'redux/baseQueryForToken';
import { setToken } from './slice/tokenSlice';
export const tokenApi = createApi({
  reducerPath: 'tokenApi',
  baseQuery,
  tagTypes: ['token'],
  endpoints: builder => ({
    createToken: builder.mutation<any, any>({
      query: data => ({
        url: '/token',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['token'],
    }),
  }),
});

export const { useCreateTokenMutation } = tokenApi;
