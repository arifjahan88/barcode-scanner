import { Button, ConfigProvider, Space, Typography } from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";

const HeaderWithText = ({ label, onclick: addClick }) => {
  const data = [
    {
      colorPrimary: "#09BC8A",
      colorText: "white",
      icon: <CloudUploadOutlined />,
      onClick: addClick,
      title: `${label || ""} File`,
    },
  ];
  return (
    <section className="flex justify-between items-center mb-8">
      <Typography.Title
        style={{
          margin: "0",
          color: "#004346",
        }}
        level={2}
      >
        {label || ""}
      </Typography.Title>
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
