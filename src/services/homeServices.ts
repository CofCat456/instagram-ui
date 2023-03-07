import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Friend, Post, Story } from '../interface';

const { VITE_SERVER_URL = '' } = import.meta.env;

export const homeApi = createApi({
  reducerPath: 'homeApi',
  baseQuery: fetchBaseQuery({ baseUrl: VITE_SERVER_URL }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], 'all'>({
      query: () => 'posts',
    }),
    getStoies: builder.query<Story[], 'all'>({
      query: () => 'stories',
    }),
    getFriends: builder.query<Friend[], 'all'>({
      query: () => 'friends',
    }),
    updateFollow: builder.mutation<Friend, { id: number; friend: Friend }>({
      query: ({ id, friend }) => ({
        url: `/friends/${id}`,
        method: 'PATCH',
        body: friend,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useGetStoiesQuery, useGetFriendsQuery, useUpdateFollowMutation } =
  homeApi;
