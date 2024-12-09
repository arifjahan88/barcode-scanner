import baseApi from "../baseApi";

export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProducts: builder.mutation({
      query: (payload) => ({
        url: `/products`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["products"],
    }),

    getallProducts: builder.query({
      query: () => ({
        url: `/products`,
        method: "GET",
      }),
      providesTags: ["products"],
    }),

    deleteProducts: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),

    updateProducts: builder.mutation({
      query: ({ id, data }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["products"],
    }),

    editProducts: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useAddProductsMutation,
  useDeleteProductsMutation,
  useEditProductsQuery,
  useGetallProductsQuery,
  useUpdateProductsMutation,
} = productsApi;
