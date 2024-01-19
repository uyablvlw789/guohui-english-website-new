"use client";
import { useState } from "react";
import Link from "next/link";
import { IoMdGrid } from "react-icons/io";
import { SiAtom } from "react-icons/si";
import { GrStorage } from "react-icons/gr";
import { AiOutlineExperiment } from "react-icons/ai";
function HoverMenu({
  title = "default title",
  menuList = [
    {
      linkTitle: "Heat storage/cooling equipment and materials",
      linkIcon: <GrStorage className="text-2xl text-gray-400" />,
      linkAddress: "linkAddress 1",
    },
    {
      linkTitle:
        "Integrated Energy System for Generation, Grid, Load, and Storage",
      linkIcon: <IoMdGrid className="text-2xl text-gray-400" />,
      linkAddress: "linkAddress 2",
    },
    {
      linkTitle: "Hydrogen/ammonia-hydrogen fusion technology",
      linkIcon: <SiAtom className="text-2xl text-gray-400" />,
      linkAddress: "/products/hydrogen-ammonia-hydrogen-fusion-technology",
    },
    {
      linkTitle: "Teaching/scientific laboratory equipment",
      linkIcon: <AiOutlineExperiment className="text-2xl text-gray-400" />,
      linkAddress: "linkAddress 2",
    },
  ],
}) {
  const [isOpen, setIsopen] = useState(false);
  return (
    <div
      onMouseLeave={() => {
        setIsopen(false);
      }}
    >
      <div
        className="relative cursor-pointer"
        onMouseEnter={() => setIsopen(true)}
      >
        {title}
      </div>
      {isOpen && (
        <ul className="absolute z-10 bg-white rounded-md w-72">
          {menuList.map((listItem) => {
            return (
              <li
                key={listItem.linkTitle}
                className="p-4 border-b hover:bg-blue-100 flex gap-3"
              >
                <div className="border-r flex justify-center items-center p-3 pl-0">
                  {listItem.linkIcon}
                </div>
                <Link href={listItem.linkAddress} className=" hover:underline">
                  {listItem.linkTitle}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default HoverMenu;
