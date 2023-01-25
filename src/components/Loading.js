import React from "react";
import { Puff } from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <Puff text="Loading" color="#00BFFF" height={550} width={80} />
    </div>
  );
};
