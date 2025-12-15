import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIDomain } from "../../utils/APIDomain";

export const prayerRequestAPI = createApi({
  reducerPath: "prayerRequestAPI",
  baseQuery: fetchBaseQuery({ baseUrl: APIDomain }),
  endpoints: (builder) => ({
    getPublicPrayerRequests: builder.query({
      query: () => "/api/prayer-requests/public",
    }),
    createPrayerRequest: builder.mutation({
      query: (data) => ({
        url: "/api/prayer-requests",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetPublicPrayerRequestsQuery,
  useCreatePrayerRequestMutation,
} = prayerRequestAPI;
