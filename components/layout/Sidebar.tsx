// @ts-nocheck
import Image from "next/image";

const AWS_URL =
  "https://poro-guohui-english-website.s3.us-west-1.amazonaws.com";

export default function Sidebar({ contentList, sidebarTitle }) {
  let content = contentList.map((listItem: any) => {
    return (
      <div
        key={listItem.title}
        className="flex h-48 gap-3 border-b-2 border-b-blue-400 px-2 py-6"
      >
        <div className="relative w-44">
          <Image
            src={`${AWS_URL}/${listItem.img}`}
            alt={listItem.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="line-clamp-4">{listItem.title}</p>
          <p className="text-gray-500">
            {listItem.date ? listItem.date.toDateString() : ""}
          </p>
        </div>
      </div>
    );
  });
  return (
    <aside className="flex flex-col gap-3">
      <h2 className="border-t-4 border-t-blue-400 p-2 text-xl">
        {sidebarTitle}
      </h2>
      {content}
    </aside>
  );
}
