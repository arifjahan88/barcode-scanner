"use client";

import { store } from "@/store/store";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = ({ children }) => {
  return (
    <AntdRegistry>
      <Provider store={store}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#dc2626",
            },
          }}
        >
          {children}
        </ConfigProvider>
        <ToastContainer />
      </Provider>
    </AntdRegistry>
  );
};

export default MainLayout;
