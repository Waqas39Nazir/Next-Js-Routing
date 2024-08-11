import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className=" px-[5%] bg-black text-white flex flex-row justify-between  py-4">
      <h1>Logo</h1>
      <ul className=" gap-10 flex flex-row text-lg font-light justify-between items-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
