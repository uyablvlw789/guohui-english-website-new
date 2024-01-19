"use client";
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { convertSlugToString } from "@/utils/convertSlugToString";

export default function BreadcrumbComponent() {
  const path = usePathname();

  const pathArr = path.split("/");

  pathArr.shift();

  const breadcrumbArr = pathArr.map((breadcrumbArrItem) => {
    return (
      <BreadcrumbItem key={breadcrumbArrItem}>
        <Link
          className="px-2 transition-all hover:text-blue-700 dark:text-zinc-700"
          href={`/${breadcrumbArrItem}`}
        >
          {convertSlugToString(breadcrumbArrItem)}
        </Link>
      </BreadcrumbItem>
    );
  });
  breadcrumbArr.unshift(
    <BreadcrumbItem
      className="transition-all hover:text-blue-700"
      icon={HiHome}
      key="home"
    >
      <Link className="px-2 dark:text-zinc-700" href="/">
        Home
      </Link>
    </BreadcrumbItem>,
  );

  return (
    <Breadcrumb
      // aria-label="Default breadcrumb example"
      className="rounded-md bg-blue-100 p-3 dark:bg-blue-300"
    >
      {breadcrumbArr}
    </Breadcrumb>
  );
}
