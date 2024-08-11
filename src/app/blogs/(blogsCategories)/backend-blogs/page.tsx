import React from "react";
import BlogCard from "@/components/BlogCard";

const BackendBlogs = () => {
  const BLOGS = [
    {
      title: "Node JS",
      description: `Node.js is an open-source, cross-platform runtime environment
       that allows developers to execute JavaScript code on the server side, outside
        of a web browser. Built on Chrome's V8 JavaScript engine, Node.js is designed
         for building scalable and high-performance network applications.`,
    },
    {
      title: "Nest JS",
      description: `Node.js is an open-source, cross-platform runtime environment
       that allows developers to execute JavaScript code on the server side, outside
        of a web browser. Built on Chrome's V8 JavaScript engine, Node.js is designed
         for building scalable and high-performance network applications.`,
    },
  ];
  return (
    <div className="w-[75%] p-12 grid grid-cols-2 gap-5">
      {BLOGS.map((blog, index) => {
        return (
          <BlogCard
            key={index}
            title={blog.title}
            description={blog.description}
          />
        );
      })}
    </div>
  );
};

export default BackendBlogs;
