"use client";

import { useDispatch } from "react-redux";
import { ProductsFormData } from "../Common/Form/FormData";
import { SuccessNotification } from "../Hooks/Notification";
import { handleModal } from "@/store/slices/modalSlice";
import HeaderWithText from "../Common/Header/HeaderWithText";
import { CustomTable } from "../Common/Table/CustomTable";
import CustomModal from "../Common/Modal/CustomModal";
import CustomForm from "../Common/Form/CustomForm";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const formData = ProductsFormData();

  //   //Api call
  //   const [ProductsFile, { isLoading: ProductsLoading }] = useProductsFileMutation();
  //   const { data: AllData, isFetching: GetDataLoading } = useGetFilesQuery();
  //   const [DeleteFile] = useDeleteFileMutation();
  //   const [UpdateFile, { isLoading: UpdateLoading }] = useUpdateFileMutation();

  const handleDelete = async (id) => {
    const res = await DeleteFile(id);
    if (res?.data?.success) {
      SuccessNotification(res?.data?.message);
    }
  };

  const handleEdit = (record) => {
    dispatch(handleModal({ open: true, editData: record }));
  };

  const onFormSubmit = async (data) => {
    console.log(data);
    // const sendData = new FormData();
    // sendData.append("title", data.title);
    // data.Products_file && sendData.append("Products_file", data.Products_file);

    // const apiCall = data?._id
    //   ? await UpdateFile({
    //       id: data?._id,
    //       data: sendData,
    //     })
    //   : await ProductsFile(sendData);

    // if (apiCall?.data?.success) {
    //   SuccessNotification(apiCall?.data?.message);
    //   dispatch(handleModal({ open: false }));
    // }
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
        data={{
          data: [],
        }}
        loading={false}
        onDelete={handleDelete}
        onEdit={handleEdit}
        hiddenColumns={["_id", "createdAt", "updatedAt"]}
      />
      <CustomModal
        title="Products"
        width={600}
        onclose={() => {
          dispatch(handleModal({ open: false }));
        }}
      >
        <CustomForm formData={formData} onSubmit={onFormSubmit} loading={false} />
      </CustomModal>
    </section>
  );
};

export default ProductsPage;
