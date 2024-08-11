import React from "react";

const SinglePhoto = () => {
  return (
    <>
      {/****** THIS ONE IS FOR REFRESH */}
      <div className=" fixed w-full h-full bg-black opacity-95 top-0 flex items-center justify-between left-0 z-50">
        <h1 className="w-fit m-auto p-40 bg-green-900">
          I am Intercepting Page Route Modal works when page is refreshed
        </h1>
      </div>
    </>
  );
};

export default SinglePhoto;
