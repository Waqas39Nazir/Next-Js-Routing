import React from "react";

const Footer = () => {
  return (
    <footer className="px-[5%] py-10 bg-black text-white flex flex-row justify-between">
      <div className=" w-[25%] flex flex-col gap-3">
        <h1 className=" text-xl font-normal">Logo</h1>
        {/* <ul>
          <li>
            <p>
              This is paragraph this is paragraph this is paragraph this is
              paragraph. This is paragraph. This is paragraph this is paragraph
              this is paragraph this is paragraph. This is paragraph this is
              paragraph.
            </p>
          </li>
        </ul> */}
      </div>

      <div className=" w-[25%] flex flex-col gap-3">
        <h1 className=" text-xl font-normal">About Us</h1>
        <ul className="flex flex-col gap-1">
          <li>Blog</li>
          <li>About us</li>
        </ul>
      </div>

      <div className=" w-[25%] flex flex-col gap-3">
        <h1 className=" text-xl font-normal">Profile</h1>
        <ul className="flex flex-col gap-1">
          <li>Blog</li>
          <li>About us</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
