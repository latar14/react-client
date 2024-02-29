import { build } from "vite";
import { User } from "../types";
import { api } from "./api";

export const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        loging: builder.mutation<              // mutation для post, query для get
        {token: string},
        {email: string; password: string}>
        ({
            query: (userData) => ({
                url: '/login',
                method: 'POST',
                body: userData
            })
        }),
          register: builder.mutation<
          {email: string; password: string; name: string;},
          {email: string; password: string; name: string;}
          > ({
            query: (userData) => ({
                url: '/register',
                method: 'POST',
                body: userData
            })
          }),
          current: builder.query<User, void>({
            query: () => ({
                url: '/current',
                method: 'GET',
            })
          }),
          getuserById: builder.query<User, string>({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'GET'
            })
          }),
          updateUser: builder.mutation<User, { userData: FormData, id: string}>({
            query: ({userData, id}) => ({
                url: `/users/${id}`,
                method: 'PUT',
                body: userData
            })
          })    
    })
})

export const {
    use
} = userApi;