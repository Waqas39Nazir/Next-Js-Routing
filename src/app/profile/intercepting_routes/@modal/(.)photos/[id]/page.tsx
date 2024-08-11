"use client";
import React from "react";

const page = () => {
  return (
    <>
      <div className=" fixed w-full h-full bg-black opacity-95 top-0 flex items-center justify-between left-0 z-50">
        <h1 className="w-fit m-auto p-40 bg-green-900">
          I am Intercepting Page Route Modal
        </h1>
      </div>
    </>
  );
};

export default page;
