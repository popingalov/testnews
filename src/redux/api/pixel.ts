import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the endpoints and types
export const pexelsApi = createApi({
  reducerPath: 'pexelsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.pexels.com/v1/',
    prepareHeaders: headers => {
      headers.set(
        'Authorization',
        'sXoxjEx657xdmLAwUOelbWIQbkaZ5z9D9wS2khXybV3Punop6PRBBUWA',
      );
      return headers;
    },
  }),
  endpoints: builder => ({
    getPhotos: builder.query<IPhotoRespons, number>({
      query: (page = 1) => `curated?per_page=10&page=${page}`,
    }),
    searchPhotos: builder.query<IPhotoRespons, string>({
      query: (query: string) => `search?query=${query}&per_page=9&page=1`,
    }),
  }),
});

// Export the hooks for the endpoints
export const { useGetPhotosQuery, useSearchPhotosQuery } = pexelsApi;
