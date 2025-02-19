import React from "react";

const ProductDetail = async ({ params }: { params: { ProductId: string } }) => {
  return <div>Product Detail page inside {await params.ProductId} </div>;
};

export default ProductDetail;
