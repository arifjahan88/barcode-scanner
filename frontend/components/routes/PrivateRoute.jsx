"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token, router]);

  if (!token) {
    return null;
  }

  return children;
};
