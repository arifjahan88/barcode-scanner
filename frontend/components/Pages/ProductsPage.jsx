"use client";

import { useDispatch } from "react-redux";
import { ProductsFormData } from "../Common/Form/FormData";
import { handleModal } from "@/store/slices/modalSlice";
import HeaderWithText from "../Common/Header/HeaderWithText";
import { CustomTable } from "../Common/Table/CustomTable";
import CustomModal from "../Common/Modal/CustomModal";
import CustomForm from "../Common/Form/CustomForm";
import {
  useAddProductsMutation,
  useDeleteProductsMutation,
  useGetallProductsQuery,
  useUpdateProductsMutation,
} from "@/store/api/endpoints/products";
import { toast } from "react-toastify";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const formData = ProductsFormData();

  //Api call
  const [AddProducts, { isLoading: AddProductsLoading }] = useAddProductsMutation();
  const { data: AllProductData, isFetching: GetProductDataLoading } = useGetallProductsQuery();
  const [Delete] = useDeleteProductsMutation();
  const [UpdateProducts, { isLoading: UpdateProductsLoading }] = useUpdateProductsMutation();

  const handleDelete = async (id) => {
    const res = await Delete(id);
    if (res?.data?.success) {
      toast.error(res?.data?.message || "Something went wrong");
    }
  };

  const handleEdit = (record) => {
    dispatch(handleModal({ open: true, editData: record }));
  };

  const onFormSubmit = async (data) => {
    const sendData = {
      material: data?.material,
      barcode: data?.barcode,
      description: data?.description,
    };

    const apiCall = data?._id
      ? await UpdateProducts({
          id: data?._id,
          data: sendData,
        })
      : await AddProducts(sendData);

    if (apiCall?.data?.success) {
      toast.success(apiCall?.data?.message || "Something went wrong");
      dispatch(handleModal({ open: false }));
    }
  };
  return (
    <section className="container mx-auto p-5">
      <HeaderWithText
        label="Products"
        onclick={() => {
          dispatch(handleModal({ open: true }));
        }}
      />
      <CustomTable
        data={AllProductData}
        loading={GetProductDataLoading}
        onDelete={handleDelete}
        onEdit={handleEdit}
        hiddenColumns={["_id", "createdAt", "updatedAt", "__v", "category"]}
      />
      <CustomModal
        title="Products"
        width={600}
        onclose={() => {
          dispatch(handleModal({ open: false }));
        }}
      >
        <CustomForm
          formData={formData}
          onSubmit={onFormSubmit}
          loading={AddProductsLoading || UpdateProductsLoading}
        />
      </CustomModal>
    </section>
  );
};

export default ProductsPage;
