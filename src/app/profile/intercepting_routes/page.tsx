import React from "react";
import PhotoCard from "@/components/PhotoCard";

const InterceptingToutes = () => {
  const array = [1, 2, 3, 4, 5];
  return (
    <div className="w-[75%] p-12 flex flex-col gap-3">
      <h1 className=" text-black">Intercepting Routes</h1>

      <div className="w-full flex flex-col gap-2">
        {array.map((_, index) => {
          return <PhotoCard key={index} />;
        })}
      </div>
    </div>
  );
};

export default InterceptingToutes;
