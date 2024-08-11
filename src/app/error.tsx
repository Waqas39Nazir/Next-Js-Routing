"use client";
import React from "react";

const Error = ({ error, reset }: any) => {
  console.log("Error:", error);

  return (
    <div className=" flex flex-col gap-3 items-center justify-center h-full p-4 rounded bg-green-400">
      <h1 className=" text-8xl">Error Occured:</h1>
      <p className=" text-5xl">Something went wrong</p>
      <button onClick={reset}></button>
    </div>
  );
};

export default Error;
