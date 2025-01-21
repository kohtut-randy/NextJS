import React from "react";
import { notFound } from "next/navigation";
const ReviewDetails = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      <p>
        Review{params.reviewId} for product{params.productId}
      </p>
    </div>
  );
};

export default ReviewDetails;
