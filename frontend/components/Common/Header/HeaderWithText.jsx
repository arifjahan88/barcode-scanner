"use client";
import { Button, ConfigProvider, Space, Typography } from "antd";
import { CloudUploadOutlined, LoginOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { useLogout } from "@/components/Hooks/Logout";
import { useRouter } from "next/navigation";

const HeaderWithText = ({ label, onclick: addClick }) => {
  const Logout = useLogout();
  const router = useRouter();

  const data = [
    {
      colorPrimary: "#09BC8A",
      colorText: "white",
      icon: <CloudUploadOutlined />,
      onClick: addClick,
      title: `Add ${label || ""}`,
    },

    {
      colorPrimary: "#c1121f",
      colorText: "white",
      icon: <LoginOutlined />,
      onClick: Logout,
      title: `Log Out`,
    },
  ];

  return (
    <section className="flex justify-between items-center mb-8">
      <Space>
        <Button onClick={() => router.back()} icon={<ArrowLeftOutlined />} />
        <Typography.Title
          style={{
            margin: "0",
            color: "#004346",
          }}
          level={2}
        >
          {label || ""}
        </Typography.Title>
      </Space>
      <Space>
        {data.map((item) => {
          return (
            <ConfigProvider
              key={item.colorPrimary}
              theme={{
                token: {
                  colorPrimary: item.colorPrimary,
                  colorText: item.colorText,
                },
              }}
            >
              <Button onClick={item?.onClick} type="primary" icon={item?.icon} size="large">
                {item?.title}
              </Button>
            </ConfigProvider>
          );
        })}
      </Space>
    </section>
  );
};

export default HeaderWithText;
