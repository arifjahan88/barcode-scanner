import ProductsPage from "@/components/Pages/ProductsPage";
import { PrivateRoute } from "@/components/routes/PrivateRoute";

const page = () => {
  return (
    <>
      <PrivateRoute>
        <ProductsPage />
      </PrivateRoute>
    </>
  );
};

export default page;
