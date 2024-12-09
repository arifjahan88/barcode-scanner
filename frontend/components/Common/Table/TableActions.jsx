import { Space, Popconfirm } from "antd";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { QuestionCircleOutlined } from "@ant-design/icons";

export const TableActions = ({ record, onEdit, onDelete, actions }) => {
  return (
    <Space size="middle">
      {actions?.edit && onEdit && (
        <button
          onClick={() => onEdit(record)}
          className="text-gray-400 hover:text-gray-800 duration-300 ease-in-out"
        >
          <FaRegEdit />
        </button>
      )}
      {actions?.delete && onDelete && (
        <Popconfirm
          title="Delete"
          description="Are you sure you want to delete this record?"
          onConfirm={() => onDelete(record._id)}
          okText="Delete"
          icon={<QuestionCircleOutlined style={{ color: "red" }} />}
        >
          <button className="text-gray-400 hover:text-gray-800 duration-300 ease-in-out">
            <RiDeleteBin4Fill />
          </button>
        </Popconfirm>
      )}
    </Space>
  );
};
