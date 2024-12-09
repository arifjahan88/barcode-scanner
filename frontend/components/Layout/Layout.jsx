"use client";

import { store } from "@/store/store";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = ({ children }) => {
  return (
    <AntdRegistry>
      <Provider store={store}>
        {children} <ToastContainer />
      </Provider>
    </AntdRegistry>
  );
};

export default MainLayout;
