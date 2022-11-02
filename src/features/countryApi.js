import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const countryApi = createApi({
    reducerPath : "countryApi",

    baseQuery: fetchBaseQuery({
        baseUrl: "https://restcountries.com"
    }),
    endpoints: (builder) => ({
        all: builder.query({
            query: (search) => `/v3.1/${search}`
        }),
        filterByRegion: builder.query({  
            query: (region) => `/v2/region/${region}`
        }),
        getOneCountry: builder.query({  
            query: (name) => `/v3.1/name/${name}`
        }),

    })
})

export default countryApi
export const {useAllQuery,useFilterByRegionQuery,useGetOneCountryQuery} = countryApi