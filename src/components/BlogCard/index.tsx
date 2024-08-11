import React from "react";

type Props = {
  title: string;
  description: string;
};

const BlogCard = ({ title, description }: Props) => {
  return (
    <div className="flex flex-col h-fit gap-2 rounded-lg text-black bg-green-300 p-3 shadow-md hover:bg-green-500 hover:text-white">
      <h1 className=" text-2xl font-semibold">{title}</h1>
      <p className="text-justify">{description}</p>
      <button className=" px-3 py-1 rounded bg-yellow-200 hover:bg-yellow-400">
        View
      </button>
    </div>
  );
};

export default BlogCard;
