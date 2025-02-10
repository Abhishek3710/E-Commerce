import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithErrorHandling } from "../../app/api/baseApi";


export const errorApi = createApi({
    reducerPath:'errorApi',
    baseQuery: baseQueryWithErrorHandling,
    endpoints: (builder)=>({
        get404Error: builder.query<void, void>({
            query: () =>({url:"buggy/not-found"})
        }),
        get400Error: builder.query<void, void>({
            query: () =>({url:"buggy/bad-request"})
        }),
        get401Error: builder.query<void, void>({
            query: () =>({url:"buggy/unauthorized"})
        }),
        getValidationError: builder.query<void, void>({
            query: () =>({url:"buggy/validation-error"})
        }),
        get500Error: builder.query<void, void>({
            query: () =>({url:"buggy/server-error"})
        }),
        
    })
})

export const {useLazyGet400ErrorQuery, useLazyGet401ErrorQuery, useLazyGet404ErrorQuery, useLazyGet500ErrorQuery, useLazyGetValidationErrorQuery} = errorApi;