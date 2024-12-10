import { Checkbox, Input } from "antd";

const FieldRenderer = ({ field, data, setValue }) => {
  switch (data.type) {
    case "checkbox":
      return (
        <Checkbox
          {...field}
          checked={field.value}
          className="w-max"
          onChange={(e) => {
            field.onChange(e.target.checked);
          }}
        >
          {data.label}
        </Checkbox>
      );

    default:
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
  }
};

export default FieldRenderer;
