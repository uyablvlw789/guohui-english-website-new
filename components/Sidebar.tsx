import type { StaticImageData } from "next/image";
import Image from "next/image";
export interface ContentListItem {
  title: string;
  img: StaticImageData;
  date: Date;
  [key: string]: any; // 允许任意其他属性
}
export default function Sidebar({
  contentList,
}: {
  contentList: ContentListItem[];
}) {
  let content = contentList.map((listItem: ContentListItem) => {
    return (
      <div
        key={listItem.title}
        className="space-betwen flex h-48 gap-3 border-b-2 border-b-blue-400 px-2 py-6"
      >
        <Image className="object-cover" src={listItem.img} alt="" width={130} />
        <div className="flex flex-col gap-2">
          <p className="line-clamp-4">{listItem.title}</p>
          <p className="text-gray-500">{listItem.date.toDateString()}</p>
        </div>
      </div>
    );
  });
  return (
    <aside className="flex flex-col gap-3">
      <h2 className="border-t-4 border-t-blue-400 p-2 text-xl">Latest News</h2>
      {content}
    </aside>
  );
}
