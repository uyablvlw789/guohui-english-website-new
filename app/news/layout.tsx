import BreadcrumbComponent from "@/components/layout/BreadcrumbComponent";
import Sidebar from "@/components/layout/Sidebar";
import newsImage1 from "@/public/news/news1.png";
import newsImage2 from "@/public/hero1.jpg";
// import { ContentListItem } from "@/components/layout/Sidebar";
import { db } from "@/db";

export default async function ProductsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  let contentList = await db.news.findMany();
  // @ts-ignore
  contentList = contentList
    .sort((a, b) => {
      // @ts-ignore
      return b.updatedAt - a.updatedAt;
    })
    .slice(0, 2)
    .map((listItem) => {
      return {
        title: listItem.title,
        date: listItem.createdAt,
        img: listItem.coverImage,
      };
    });

  if (contentList.length === 0) {
    return <>{children}</>;
  }

  return (
    <main className=" dark:bg-zinc-900 dark:text-zinc-200">
      <div className="container mx-auto flex min-h-screen flex-col gap-8 p-8">
        <BreadcrumbComponent />
        <div className="grid grid-cols-4 gap-8 p-8 pl-0">
          <div className="col-span-3">{children}</div>
          <div className="col-span-1">
            <Sidebar sidebarTitle="Explore more" contentList={contentList} />
          </div>
        </div>
      </div>
    </main>
  );
}
