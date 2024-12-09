import { ErrorNotification } from "@/components/Hooks/Notification";

export const errorLoggingMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  // Handle error cases
  if (action.type?.endsWith("/rejected")) {
    ErrorNotification(
      action?.payload?.data?.error ||
        action?.payload?.data?.message ||
        action?.payload?.status ||
        "An error occurred"
    );
  }

  return result;
};
