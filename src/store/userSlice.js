import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//'http://localhost:4000/user/'
//https://blogback-iz7w.onrender.com/
const baseUrl = 'https://blogback-iz7w.onrender.com/user/'

export const userSlice = createApi({
    reducerPath: 'user',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (newUser) => ({
                url: 'register',
                method: 'POST',
                body: newUser,
            })
        }),
        login: builder.mutation({
            query: (logUser) =>({
                url: 'login',
                method: 'POST',
                body: logUser,
            })
        }),
        bookmark: builder.mutation({
            query: (bookData)=> ({
                url: `post/${bookData.postId}`,
                method: 'POST',
                body: bookData
            })
        })
    })
})


export const { useSignupMutation,useLoginMutation,useBookmarkMutation } = userSlice

