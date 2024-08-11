import React from "react";

const NotFound = () => {
  return (
    <div className=" flex flex-col gap-3 items-center justify-center h-full p-4 rounded bg-green-400">
      <h1 className=" text-8xl">404 Not Found</h1>
      <p className=" text-5xl">This page can{"'"}t be found</p>
    </div>
  );
};

export default NotFound;
