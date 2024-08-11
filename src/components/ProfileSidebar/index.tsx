"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProfileSidebar = () => {
  const currentPath = usePathname();
  return (
    <div className="w-[20%] flex flex-col gap-8 py-10 px-[2%] bg-black">
      <ul className="flex flex-col gap-3 text-lg font-normal">
        <li>
          <Link
            className={`w-full ${
              currentPath === "/profile/parallel_routes"
                ? "w-full bg-green-400 rounded-sm px-2 py-1"
                : ""
            }`}
            href="/profile/parallel_routes"
          >
            Parallel Routes
          </Link>
        </li>

        <li>
          <Link
            className={`w-full ${
              currentPath === "/profile/intercepting_routes"
                ? "w-full bg-green-400 rounded-sm px-2 py-1"
                : ""
            }`}
            href="/profile/intercepting_routes"
          >
            Intercepting Routes
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileSidebar;
