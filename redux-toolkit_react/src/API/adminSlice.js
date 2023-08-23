import { createApi ,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const adminApi = createApi({
    reducerPath: 'adminApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/'}),
    endpoints: (builder) =>({
        getAccounts: builder.query({
            query: () => 'account',
            transformResponse: (response)=> response.sort((a,b)=> b.id-a.id),
            providesTags: ['account'],
        }),
        addAccount: builder.mutation({
            query: (amount,id) => ({
                url: 'account',
                method: 'POST',
                body: {amount,id}
            }),
            invalidatesTags:['account']
        }),
        deleteAccount: builder.mutation({
            query: (id) => ({
                url: `account/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags:['account']
        }),
        updateAccount: builder.mutation({
            query: ({id,amount}) => ({
                url: `account/${id}`,
                method: 'PATCH',
                body: {
                    amount
                }
            }),
            invalidatesTags:['account']
        }),
        getBonus : builder.query({
            query: ()=> 'bonus',
        }),
        
    }),
})



export const {useGetAccountsQuery,useUpdateAccountMutation ,useDeleteAccountMutation, useGetBonusQuery, useAddAccountMutation} = adminApi;