import { FiTrash } from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import { useState } from "react";
import { useDeleteProductsMutation } from "@/store/api/endpoints/products";
import { toast } from "react-toastify";

export const BurnBarrel = ({ setCards }) => {
  const [active, setActive] = useState(false);
  const [DeleteProducts] = useDeleteProductsMutation();

  const handleDragOver = (e) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDragEnd = async (e) => {
    const cardId = e.dataTransfer.getData("cardId");
    console.log(cardId);

    setCards((pv) => pv.filter((c) => c._id !== cardId));

    const res = await DeleteProducts(cardId);
    if (res?.data?.success) {
      toast.success(res?.data?.message || "Something went wrong");
    }

    setActive(false);
  };

  return (
    <div
      onDrop={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`mt-10 grid h-56 w-full md:w-56 shrink-0 place-content-center rounded border text-3xl ${
        active
          ? "border-red-800 bg-red-800/20 text-red-500"
          : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
      }`}
    >
      {active ? <FaFire className="animate-bounce" /> : <FiTrash />}
    </div>
  );
};
