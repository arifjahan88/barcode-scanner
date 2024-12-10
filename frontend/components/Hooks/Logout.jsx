import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const useLogout = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
    toast.success("Logged Out Successfully");
  };

  return handleLogout;
};
