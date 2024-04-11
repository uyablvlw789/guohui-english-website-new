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
      linkAddress: "/products/heat-storage-cooling-equipment-and-materials",
    },
    {
      linkTitle:
        "Integrated Energy System for Generation, Grid, Load, and Storage",
      linkIcon: <IoMdGrid className="text-2xl text-gray-400" />,
      linkAddress:
        "/products/integrated-energy-system-generation-grid-load-storage",
    },
    {
      linkTitle: "Hydrogen/ammonia-hydrogen fusion technology",
      linkIcon: <SiAtom className="text-2xl text-gray-400" />,
      linkAddress: "/products/hydrogen-ammonia-hydrogen-fusion-technology",
    },
    {
      linkTitle: "Teaching/scientific laboratory equipment",
      linkIcon: <AiOutlineExperiment className="text-2xl text-gray-400" />,
      linkAddress: "/products/teaching-scientific-laboratory-equipment",
    },
  ],
}) {
  const [isOpen, setIsopen] = useState(false);
  return (
    <div
      className={`z-50 dark:hover:${isOpen ? " text-zinc-800" : ""}`}
      onMouseLeave={() => {
        setIsopen(false);
      }}
    >
      <p
        className="relative cursor-pointer"
        onMouseEnter={() => setIsopen(true)}
      >
        {title}
      </p>
      {isOpen && (
        <ul className="absolute z-10 w-72 rounded-md dark:bg-zinc-950 dark:text-zinc-200">
          {menuList.map((listItem) => {
            return (
              <li
                key={listItem.linkTitle}
                className="z-50 flex gap-3 border-b px-6 py-4 hover:bg-blue-100 hover:text-zinc-800 dark:bg-zinc-900 dark:hover:text-zinc-600"
              >
                <div className="flex items-center justify-center border-r p-3 pl-0 dark:border-zinc-950">
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
