import React from "react";
import ProfileSidebar from "@/components/ProfileSidebar";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-row gap-0 h-full">
      <ProfileSidebar />
      {children}
    </div>
  );
};

export default Layout;
