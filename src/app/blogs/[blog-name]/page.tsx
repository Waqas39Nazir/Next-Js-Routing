import React from "react";

const SingleBlog = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[80%] flex flex-col h-fit gap-2 rounded-lg text-black bg-green-300 p-3 shadow-md hover:bg-green-500 hover:text-white">
        <h1 className=" text-2xl font-semibold">NODE JS</h1>
        <p className="text-justify">
          Node.js is an open-source, cross-platform runtime environment that
          allows developers to execute JavaScript code on the server side,
          outside of a web browser. Built on Chrome's V8 JavaScript engine,
          Node.js is designed for building scalable and high-performance network
          applications.Node.js is an open-source, cross-platform runtime
          environment that allows developers to execute JavaScript code on the
          server side, outside of a web browser. Built on Chrome's V8 JavaScript
          engine, Node.js is designed for building scalable and high-performance
          network applications.Node.js is an open-source, cross-platform runtime
          environment that allows developers to execute JavaScript code on the
          server side, outside of a web browser. Built on Chrome's V8 JavaScript
          engine, Node.js is designed for building scalable and high-performance
          network applications.
        </p>
      </div>
    </div>
  );
};

export default SingleBlog;
