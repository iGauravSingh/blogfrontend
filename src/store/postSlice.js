import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseUrl = 'http://localhost:4000/post'

export const postSlice = createApi({
    reducerPath: 'post',
    baseQuery: fetchBaseQuery({baseUrl}),
    tagTypes: ['post'],
    endpoints: (builder) => ({
        readData: builder.query({
            query: ()=> '/'
        }),
        readOne: builder.query({
            query: (idItem)=> `/${idItem.id}`
        }),
        createPost: builder.mutation({
            query: (postData)=> ({
                url: '/',
                method: 'POST',
                body: postData
            })
        }),
        userPosts: builder.query({
            query: (id)=> `/user/${id}`,
            providesTags: ['post']
        }),
        likePost: builder.mutation({
            query: (userPostdata)=> ({
                url: `/likes/${userPostdata.idPost}`,
                method: 'POST',
                body: userPostdata
            }),
            invalidatesTags: ['post']
        })
        })
       
    })


export const { useReadDataQuery,useReadOneQuery,useCreatePostMutation, useUserPostsQuery,useLikePostMutation } = postSlice

