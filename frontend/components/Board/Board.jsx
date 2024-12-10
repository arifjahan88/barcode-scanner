"use client";

import React, { useEffect, useState } from "react";
import Column from "./prompts/Column";
import { BurnBarrel } from "./prompts/BurnBarrel";
import { Button, Spin } from "antd";
import Link from "next/link";
import BarcodeScanner from "../Barcode/BarcCodeDecode";
import { useGetallProductsQuery } from "@/store/api/endpoints/products";
import { PrivateRoute } from "../routes/PrivateRoute";
import { useLogout } from "../Hooks/Logout";

export const Board = () => {
  const { data: AllProducts, isLoading } = useGetallProductsQuery();
  const [cards, setCards] = useState([]);
  const Logout = useLogout();

  useEffect(() => {
    if (AllProducts?.data) {
      const TransformData = AllProducts.data.map((item) => ({
        ...item,
        column: item?.category ? "categorized" : "uncategorized",
      }));
      setCards(TransformData);
    }
  }, [AllProducts]);

  return (
    <PrivateRoute>
      <section className="h-screen w-full bg-neutral-800 text-neutral-50">
        <div className="flex flex-col h-full w-full gap-3 overflow-auto p-5">
          <BarcodeScanner />
          <h1 className="text-3xl text-center pb-5 w-full font-semibold">
            WelCome to Swapno Dashboard
          </h1>
          {isLoading ? (
            <Spin tip="Loading" size="large" />
          ) : (
            <div className="flex flex-col md:flex-row gap-3 justify-center w-full">
              <Column
                title="Not Categorized"
                column="uncategorized"
                headingColor="text-blue-200"
                cards={cards}
                setCards={setCards}
              />
              <Column
                title="Categorized"
                column="categorized"
                headingColor="text-emerald-200"
                cards={cards}
                setCards={setCards}
              />
              <div>
                <BurnBarrel setCards={setCards} />
                <div className="flex flex-col md:flex-row gap-3">
                  <Link href="/products">
                    <Button className="mt-2 w-full" color="default" variant="outlined">
                      Add Product
                    </Button>
                  </Link>
                  <Button onClick={Logout} className="mt-2 w-full" type="primary">
                    Logout
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </PrivateRoute>
  );
};
