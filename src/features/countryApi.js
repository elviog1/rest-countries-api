import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const countryApi = createApi({
    reducerPath : "countryApi",

    baseQuery: fetchBaseQuery({
        baseUrl: "https://restcountries.com/v3.1"
    }),
    endpoints: (builder) => ({
        all: builder.query({
            query: (search) => `/${search}`
        }),
        filterByRegion: builder.query({  
            query: (region) => `/${region}`
        }),
        getOneCountry: builder.query({  
            query: (name) => `/name/${name}`
        }),
    })
})

export default countryApi
export const {useAllQuery,useFilterByRegionQuery,useGetOneCountryQuery} = countryApi