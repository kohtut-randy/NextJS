import React from "react";

const ProductDetails = ({ params }: { params: { productId: string } }) => {
  return (
    <div>
      <p>Product Details {params.productId}</p>
    </div>
  );
};

export default ProductDetails;
