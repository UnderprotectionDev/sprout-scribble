import { auth } from "@/server/auth";
import { redirect } from "next/navigation";
import React from "react";
import ProductForm from "./ProductForm";

const AddProduct = async () => {
  const session = await auth();
  if (session?.user?.role !== "admin") return redirect("/dashboard/settings");

  return (
    <div>
      <ProductForm />
    </div>
  );
};

export default AddProduct;
