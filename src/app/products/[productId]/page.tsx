import { Metadata } from "next";
import { resolve } from "path";
type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`IPhone ${params.productId}`);
    });
  });
  return {
    title: `Product${params.productId}`,
  };
};
const ProductDetails = ({ params }: Props) => {
  return (
    <div>
      <p>Product Details {params.productId}</p>
    </div>
  );
};

export default ProductDetails;
