import React from "react";

const ProfileSidebar = () => {
  return (
    <div className="w-[25%] flex flex-col gap-8 py-5 px-[2%] bg-black">
      <ul className="flex flex-col gap-3 text-lg font-normal">
        <li>Images</li>
        <li>Profile</li>
      </ul>
    </div>
  );
};

export default ProfileSidebar;
