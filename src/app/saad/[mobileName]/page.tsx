"use client";
import React from "react";
import { useRouter } from "next/navigation";

const DynamicRoute = (props: any) => {
  console.log("Props:", props);
  console.log("Props.params:", props.params);
  console.log("Props.params.mobileName:", props.params.mobileName);

  /**** BACKEND API */
  // console.log("Props.params.mobileName:", props.params.mobileName);
  /************ */
  const router = useRouter();

  const handler = () => {
    router.push("/saad/nokia/1");
  };

  return (
    <div className="w-full grid grid-cols-2 gap-10 p-10">
      {/* <p>{props}</p> */}
      {/* <h1 className="text-black">I am Your Dynamic Route</h1> */}
      <div
        onClick={handler}
        className=" cursor-pointer w-40 h-40 bg-green-600"
      ></div>
      <div
        onClick={handler}
        className=" cursor-pointer w-40 h-40 bg-green-100"
      ></div>
      <div
        onClick={handler}
        className=" cursor-pointer w-40 h-40 bg-green-900"
      ></div>
      <div
        onClick={handler}
        className=" cursor-pointer w-40 h-40 bg-green-300"
      ></div>
      <div
        onClick={handler}
        className=" cursor-pointer w-40 h-40 bg-green-700"
      ></div>
    </div>
  );
};

export default DynamicRoute;
