import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from 'redux/baseQuery';
import token from 'constants/token.json';
export const tokenApi = createApi({
  reducerPath: 'tokenApi',
  baseQuery,
  tagTypes: ['token'],
  endpoints: builder => ({
    getToken: builder.query<any, any>({
      async queryFn(_arg, { getState }, _extraOptions, fetchWithBQ) {
        const result = await token;
        return result as any;
      },
      providesTags: ['token'],
    }),
  }),
});

export const { useGetTokenQuery } = tokenApi;
