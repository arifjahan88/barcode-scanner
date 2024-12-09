import { notification } from "antd";

export const SuccessNotification = (message) => {
  notification.success({
    message: "Success",
    description: message || "Something went wrong",
  });
};

export const ErrorNotification = (message) => {
  notification.error({
    message: "Error",
    description: message || "Something went wrong",
  });
};
