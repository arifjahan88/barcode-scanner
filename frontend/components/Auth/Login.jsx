"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useForm, Controller } from "react-hook-form";
import { Input, Button } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useUseLoginMutation } from "@/store/api/endpoints/auth";

const Login = () => {
  const [userLogin, { isLoading }] = useUseLoginMutation();
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    const res = await userLogin(data);
    if (res?.data?.success) {
      localStorage.setItem("token", res?.data?.data?.token);
      router.push("/");
      toast.success(res.data.message);
    }
  };

  return (
    <div
      className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat font-mono"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      <div className="w-full h-screen bg-black absolute bg-opacity-50 backdrop-blur-sm"></div>

      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md relative z-10">
        <div className="text-white">
          <div className="mb-3 flex flex-col items-center">
            <h1 className="mb-2 text-3xl">Login</h1>
            <div className="text-sm border border-gray-600 rounded-lg p-1">
              <p>Email: admin@gmail.com</p>
              <p>Password: 123456</p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    size="large"
                    prefix={<MailOutlined className="text-gray-400" />}
                    placeholder="Enter Email"
                  />
                )}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <Controller
                name="password"
                control={control}
                rules={{
                  required: "Password is required",
                }}
                render={({ field }) => (
                  <Input.Password
                    {...field}
                    size="large"
                    prefix={<LockOutlined className="text-gray-400" />}
                    placeholder="Enter Password"
                  />
                )}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            <div className="flex justify-center text-lg text-black">
              <Button
                type="primary"
                htmlType="submit"
                loading={isLoading}
                className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
