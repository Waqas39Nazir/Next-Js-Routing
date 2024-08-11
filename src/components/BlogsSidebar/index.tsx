"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BlogsSidebar = () => {
  const currentPath = usePathname();

  console.log("path:", currentPath);

  return (
    <div className="w-[20%] flex flex-col gap-8 px-10 py-10 bg-black">
      <ul className="flex flex-col gap-5 text-lg font-normal">
        <li className="w-full">
          <Link
            className={`w-full ${
              currentPath === "/blogs"
                ? "w-full bg-green-400 rounded-sm px-2 py-1"
                : ""
            }`}
            href="/blogs"
          >
            Blogs
          </Link>
        </li>
        <li>
          <Link
            className={`w-full ${
              currentPath === "/blogs/frontend-blogs"
                ? "w-full bg-green-400 rounded-sm px-2 py-1"
                : ""
            }`}
            href="/blogs/frontend-blogs"
          >
            Frontend Blogs
          </Link>
        </li>
        <li>
          <Link
            className={`w-full ${
              currentPath === "/blogs/backend-blogs"
                ? "w-full bg-green-400 rounded-sm px-2 py-1"
                : ""
            }`}
            href="/blogs/backend-blogs"
          >
            Backend Blogs
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BlogsSidebar;
