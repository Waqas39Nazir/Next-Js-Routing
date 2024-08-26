"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  index: number;
};

const PhotoCard = ({ index }: Props) => {
  const router = useRouter();

  const navigationHandler = () => {
    router.push(`/profile/intercepting_routes/photo/${index}`);
    // router.push(`/profile/intercepting_routes`);
  };
  return (
    <div
      onClick={navigationHandler}
      className="w-full bg-green-400 p-6 rounded flex flex-row gap-8 cursor-pointer"
    >
      <div className="w-[20%]">
        <Image
          className="w-full h-full rounded-sm bg-white p-2"
          src="/next.svg"
          width={300}
          height={300}
          alt="Image"
        />
      </div>

      <div className="w-[70%] text-black flex flex-col gap-1">
        <h1>Heading</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
      </div>
    </div>
  );
};

export default PhotoCard;
