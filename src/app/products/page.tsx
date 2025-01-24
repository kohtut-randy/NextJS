import Link from "next/link";
import React from "react";

const Products = () => {
  const productId = 100;
  return (
    <div>
      <ul>
        <li>
          <Link href="products/1">P1</Link>
        </li>
        <li>
          <Link href="products/2">P2</Link>
        </li>
        <li>
          <Link href="products/3">P3</Link>
        </li>
        <li>
          <Link href={`products/${productId}`}>P100</Link>
        </li>
      </ul>
      <Link href="/">Home</Link>
    </div>
  );
};

export default Products;
