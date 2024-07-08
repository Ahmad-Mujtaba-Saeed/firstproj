import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: { productID: string };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `productNO${params.productID}`,
  };
};

export default function ProductDetails({
  params,
}: {
  params: { productID: string };
}) {
  if (parseInt(params.productID) > 1000) {
    notFound();
  }
  return (
    <>
      <center>
        <h1>Product Details Page {params.productID}</h1>
      </center>
    </>
  );
}
