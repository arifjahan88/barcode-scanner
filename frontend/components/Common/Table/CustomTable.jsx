import { Table as AntTable, Button, Flex, Tag } from "antd";
import { useDispatch } from "react-redux";
import { TableActions } from "./TableActions";
import { TableHeader } from "./tableHeader";

const { Column } = AntTable;

export const CustomTable = ({
  data: AllData,
  loading,
  onDelete,
  onEdit,
  hiddenColumns = [],
  actions = { edit: true, delete: true },
  searchable = true,
  pagination = { enabled: false },
}) => {
  const allHiddenColumns = [...hiddenColumns];
  const dispatch = useDispatch();

  //search handler
  const handleSearch = (value) => {
    console.log(value);
  };

  return (
    <section className="bg-white rounded-xl border">
      <TableHeader
        totalItems={AllData?.data?.length}
        onSearch={handleSearch}
        searchable={searchable}
      />

      <AntTable
        showHeader={AllData?.data?.length > 0}
        loading={loading}
        dataSource={AllData?.data}
        rowKey={(record) => record?._id}
        pagination={pagination.enabled}
        scroll={{ x: "max-content" }}
      >
        <Column title="SL" key="sl" width={50} render={(_, __, index) => index + 1} />

        {Object.keys(AllData?.data?.[0] || {}).map((key) => {
          if (allHiddenColumns.includes(key)) return null;

          return (
            <Column
              key={key}
              dataIndex={key}
              title={key[0].toUpperCase() + key.slice(1)}
              width={150}
              render={(value) => {
                if (key === "category") {
                  return <Tag color={value ? "green" : "red"}>{value ? "True" : "False"}</Tag>;
                }

                return value;
              }}
            />
          );
        })}

        <Column
          align="center"
          title="Action"
          key="action"
          width={80}
          render={(_, record) => (
            <TableActions record={record} onEdit={onEdit} onDelete={onDelete} actions={actions} />
          )}
        />
      </AntTable>
    </section>
  );
};
