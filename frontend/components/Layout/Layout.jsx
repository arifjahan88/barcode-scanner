"use client";

import { store } from "@/store/store";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Provider } from "react-redux";

const MainLayout = ({ children }) => {
  return (
    <AntdRegistry>
      <Provider store={store}>{children}</Provider>
    </AntdRegistry>
  );
};

export default MainLayout;
