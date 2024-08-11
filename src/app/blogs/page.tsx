import React from "react";
import BlogCard from "@/components/BlogCard";

const Blogs = () => {
  const BLOGS = [
    {
      title: "Next JS",
      description: `Next.js is a powerful open-source React framework
       that enables developers to build fast and user-friendly web applications.
        It combines the flexibility of React with a rich set of features
         designed to enhance both development and user experience`,
    },
    {
      title: "React JS",
      description: `React.js is widely used in both small and large-scale
       projects, from simple websites to complex web applications.
        Its focus on components, performance, and developer experience
         has made it a leading choice for front-end development.`,
    },
    {
      title: "Node JS",
      description: `Node.js is an open-source, cross-platform runtime environment
       that allows developers to execute JavaScript code on the server side, outside
        of a web browser. Built on Chrome's V8 JavaScript engine, Node.js is designed
         for building scalable and high-performance network applications.`,
    },
    {
      title: "Nest JS",
      description: `Nest.js is a progressive, open-source framework for building efficient,
       scalable, and maintainable server-side applications using Node.js. It is built with
        TypeScript, which offers strong typing and modern JavaScript features, while also
         being fully compatible with JavaScript`,
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

export default Blogs;
