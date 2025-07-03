import Image from "next/image";
import React from "react";

type Props = {
  img: string;
};

const PictureCard = ({ img }: Props) => {
  return (
    <main className="bg-gray-200 pt-5 px-2 ">
      <Image
        src={img}
        width={0}
        height={0}
        sizes="100vw"
        alt="profile"
        className="w-[270px] h-[320px] object-contain"
      />

      <article>
        <p className="font-ibm-plex-mono text-gray-600 py-2 pb-16 pl-4">
          Hephzibah Oloyede
        </p>
      </article>
    </main>
  );
};

export default PictureCard;
