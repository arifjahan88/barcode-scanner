export const ProductsFormData = () => {
  return [
    { label: "Material No.", name: "material", type: "text", required: true },
    { label: "BarCode No.", name: "barcode", type: "text", required: true },
    { label: "Description", name: "description", type: "text", required: true },
  ];
};
