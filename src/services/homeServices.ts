import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Post {
  id: number;
  location: string;
  account: string;
  avatar: string;
  photo: string;
  likes: number;
  description: string;
  hashTags: string;
  createTime: string;
}

interface Story {
  id: number;
  name: string;
  avatar: string;
}

export const homeApi = createApi({
  reducerPath: 'homeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004/' }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], number | 'all'>({
      query: (id) => {
        if (id !== 'all') {
          return `posts/${id}`;
        }
        return 'posts';
      },
    }),
    getStoies: builder.query<Story[], number | 'all'>({
      query: (id) => {
        if (id !== 'all') {
          return `stories/${id}`;
        }
        return 'stories';
      },
    }),
  }),
});

export const { useGetPostsQuery, useGetStoiesQuery } = homeApi;
