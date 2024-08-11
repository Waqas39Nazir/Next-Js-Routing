import React from "react";

const BlogsSidebar = () => {
  return (
    <div className="w-[20%] flex flex-col gap-8 px-10 py-10 bg-black">
      <ul className="flex flex-col gap-5 text-lg font-normal ">
        <li>Blogs</li>
        <li>Frontend Blogs</li>
        <li>Backend Blogs</li>
      </ul>
    </div>
  );
};

export default BlogsSidebar;
