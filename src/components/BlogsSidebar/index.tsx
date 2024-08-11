import React from "react";
import Link from "next/link";

const BlogsSidebar = () => {
  return (
    <div className="w-[20%] flex flex-col gap-8 px-10 py-10 bg-black">
      <ul className="flex flex-col gap-5 text-lg font-normal ">
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li>
          <Link href="/blogs/frontend-blogs">Frontend Blogs</Link>
        </li>
        <li>
          <Link href="/blogs/backend-blogs">Backend Blogs</Link>
        </li>
      </ul>
    </div>
  );
};

export default BlogsSidebar;
