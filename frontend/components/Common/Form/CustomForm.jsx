import { useFormSetup } from "@/components/Hooks/FormSetup";
import { Button } from "antd";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import FieldRenderer from "./FieldRenderer";
import { selectModal } from "@/store/slices/modalSlice";

const CustomForm = ({ formData, onSubmit, loading }) => {
  const { editData } = useSelector(selectModal);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues: {},
  });

  useFormSetup({ setValue, reset });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formData?.map((data, index) => (
        <div key={index} className={`flex flex-col ${data?.type === "file" ? "col-span-2" : ""}`}>
          <label htmlFor={data.name} className="mt-3 mb-1 ml-1">
            {data.label}
          </label>
          <Controller
            name={data.name}
            control={control}
            rules={{ required: data.required ? "This field is required" : false }}
            render={({ field }) => <FieldRenderer field={field} data={data} setValue={setValue} />}
          />
          {errors[data.name] && (
            <span className="text-red-500 text-xs font-semibold tracking-tight">
              {errors[data.name].message}
            </span>
          )}
        </div>
      ))}
      <Button
        type="primary"
        size="large"
        htmlType="submit"
        className="mt-5 w-max"
        loading={loading}
      >
        {editData ? "Update" : "Submit"}
      </Button>
    </form>
  );
};

export default CustomForm;
