import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import Sidebar from "@/components/Sidebar";
import newsImage1 from "@/public/news/news1.png";
import newsImage2 from "@/public/hero1.jpg";
import { ContentListItem } from "@/components/Sidebar";

const contentList: ContentListItem[] = [
  {
    title:
      "Report on China's Energy Transition Outlook 2023 Presented at the United Nations Climate Conference",
    date: new Date("11/12/2023"),
    img: newsImage1,
  },
  {
    title:
      "Nationwide Hydrogen Production Projects Commence in Multiple Regions",
    date: new Date("11/11/2023"),
    img: newsImage2,
  },
];

export default function ProductsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" dark:bg-zinc-900 dark:text-zinc-200">
      <div className="container mx-auto flex min-h-screen flex-col gap-8 p-8">
        <BreadcrumbComponent />
        <div className="grid grid-cols-3 gap-8 p-8 pl-0">
          <div className="col-span-2">{children}</div>
          <div className="col-span-1">
            <Sidebar contentList={contentList} />
          </div>
        </div>
      </div>
    </main>
  );
}
