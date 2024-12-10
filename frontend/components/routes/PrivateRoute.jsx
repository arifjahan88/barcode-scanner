"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Ensure we're on the client side
    setIsClient(true);

    // Safely get token from localStorage
    const storedToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    setToken(storedToken);
  }, []);

  useEffect(() => {
    // Redirect if no token is found
    if (isClient && !token) {
      router.push("/login");
    }
  }, [isClient, token, router]);

  // Render nothing until client-side checks are complete
  if (!isClient) {
    return null;
  }

  // Only render children if token exists
  return token ? children : null;
};
