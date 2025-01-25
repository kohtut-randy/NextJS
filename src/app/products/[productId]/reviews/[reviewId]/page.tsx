import React from "react";
import { notFound } from "next/navigation";
import { count } from "console";

const getRandomInt = (count: number): number => {
  return Math.floor(Math.random() * count);
};

const ReviewDetails = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error loading review");
  }
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
