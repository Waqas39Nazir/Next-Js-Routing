import React from "react";
import Link from "next/link";

const ProfileSidebar = () => {
  return (
    <div className="w-[20%] flex flex-col gap-8 py-10 px-[2%] bg-black">
      <ul className="flex flex-col gap-3 text-lg font-normal">
        <li>
          <Link href="/profile/parallel_routes">Parallel Routes</Link>
        </li>

        <li>
          <Link href="/profile/parallel_routes">Intercepting Routes</Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileSidebar;
