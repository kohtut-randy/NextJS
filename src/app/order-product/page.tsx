"use client";
import React from "react";
import { useRouter } from "next/navigation";
const orderProduct = () => {
  const router = useRouter();
  const handleClick = () => {
    alert("Order Placed Successfully");
    router.push("/");
  };
  return (
    <div>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
};

export default orderProduct;
