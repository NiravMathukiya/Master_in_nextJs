import React from "react";

const ReviewNumber = async ({
  params,
}: {
  params: { ReviewId: string };
}) => {
  return <div>ReviewNumber {await params.ReviewId}</div>;
};

export default ReviewNumber;
