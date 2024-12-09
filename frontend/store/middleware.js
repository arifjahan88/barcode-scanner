import { toast } from "react-toastify";

export const errorLoggingMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  // Handle error cases
  if (action.type?.endsWith("/rejected")) {
    toast.error(
      action?.payload?.data?.error ||
        action?.payload?.data?.message ||
        action?.payload?.status ||
        "An error occurred"
    );
  }

  return result;
};
