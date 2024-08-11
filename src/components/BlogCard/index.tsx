import React from "react";

type Props = {
  title: string;
  description: string;
};

const BlogCard = ({ title, description }: Props) => {
  return (
    <div className=" rounded-lg text-black bg-green-300 p-3 shadow-md hover:bg-green-500 hover:text-white">
      <h1 className=" text-2xl font-semibold">{title}</h1>
      <p className="text-justify">{description}</p>
    </div>
  );
};

export default BlogCard;
