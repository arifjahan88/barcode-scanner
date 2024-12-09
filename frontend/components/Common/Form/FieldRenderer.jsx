import { Input } from "antd";

const FieldRenderer = ({ field, data, setValue }) => {
  return (
    <Input
      {...field}
      placeholder={data.label}
      id={data.name}
      size="large"
      className="w-full"
      type={data.type}
    />
  );
};

export default FieldRenderer;
