import baseApi from "../baseApi";

export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    useLogin: builder.mutation({
      query: (payload) => ({
        url: `/auth/login`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["user"],
    }),

    userRegister: builder.mutation({
      query: (payload) => ({
        url: `auth//register`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useUseLoginMutation, useUserRegisterMutation } = productsApi;
