import { selectModal } from "@/store/slices/modalSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useFormSetup = ({ setValue, reset }) => {
  const { open, editData } = useSelector(selectModal);
  const dispatch = useDispatch();

  useEffect(() => {
    if (editData) {
      for (const key in editData) {
        setValue(key, editData[key]);
      }
    }
  }, [editData, setValue, dispatch]);

  useEffect(() => {
    if (!open) {
      reset({});
    }
  }, [open, reset, setValue]);
};
