import { handleModal, selectModal } from "@/store/slices/modalSlice";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";

const CustomModal = ({ children, title = "", width = 600 }) => {
  const { open, editData } = useSelector(selectModal);
  const dispatch = useDispatch();
  return (
    <Modal
      title={editData ? "Edit " + title : "Add " + title}
      width={width}
      open={open}
      onCancel={() => {
        dispatch(handleModal({}));
      }}
      centered
      footer={false}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
