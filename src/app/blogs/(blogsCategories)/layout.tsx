import React from "react";
import BlogsSidebar from "@/components/BlogsSidebar";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-full flex flex-row gap-0">
      <BlogsSidebar />
      {children}
    </div>
  );
};

export default Layout;
