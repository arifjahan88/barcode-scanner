import { Badge, Input } from "antd";

export const TableHeader = ({ totalItems, onSearch, searchable = true }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center my-5 px-5">
      <div className="flex items-center gap-x-3 mb-3 md:mb-0">
        <h2 className="text-lg font-medium text-gray-800">Total</h2>

        <Badge count={totalItems} showZero color="gray"></Badge>
      </div>
      {searchable && (
        <Input.Search
          size="large"
          placeholder="Search here..."
          allowClear
          onSearch={onSearch}
          style={{
            width: 300,
          }}
        />
      )}
    </div>
  );
};
