import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {IResponseTitle} from "../types/ITitle";
import {API_PARAMS, BASE_API_URL} from "../data/constants";

export const animeApi = createApi({
  reducerPath: 'animeApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_API_URL}),
  endpoints: (builder) => ({
    getNearlyTitlesResponse: builder.query<IResponseTitle, number>({
        query: (limit) => `title/updates${API_PARAMS}&limit=${limit}`,
      },
    ),
  }),
})

export const {useGetNearlyTitlesResponseQuery} = animeApi

export const useGetNearlyTitlesQuery = (limit: number) => {
  const { data, ...rest } = useGetNearlyTitlesResponseQuery(limit);
  return {data: data?.list ?? null, ...rest};
};