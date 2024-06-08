import React from "react";

const ProductDetail = ({ params }: { params: { id: String } }) => {
  return <div>{params.id}</div>;
};

export default ProductDetail;
