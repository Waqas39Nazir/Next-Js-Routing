import React from "react";

const layout = ({
  children,
  pageOne,
  pageTwo,
}: Readonly<{
  children: React.ReactNode;
  pageOne: React.ReactNode;
  pageTwo: React.ReactNode;
}>) => {
  return (
    <div className="w-[75%]">
      {children}
      <div className="w-full h-full items-center justify-center flex flex-col gap-2">
        <div>{pageOne}</div>
        <div> {pageTwo}</div>
      </div>
    </div>
  );
};

export default layout;
