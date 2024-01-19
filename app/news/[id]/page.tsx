import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import { db } from "@/db";
import Output from "editorjs-react-renderer";
import edjsHTML from "editorjs-html";
import parse from "html-react-parser";

interface SingleNewsPageProps {
  params: {
    id: string;
  };
}
export default async function SingleNewsPage({
  params: { id },
}: SingleNewsPageProps) {
  const newsArticle = await db.news.findFirst({
    where: {
      id: parseInt(id),
    },
  });

  // console.log(newsArticle?.content);

  const edjsParser = edjsHTML();
  // @ts-ignore
  const html = edjsParser.parseStrict(JSON.parse(newsArticle?.content));
  // @ts-ignore
  const renderedContent = html.map((singleHtml) => {
    return parse(singleHtml);
  });

  return (
    <main className="flex flex-col gap-6 px-6">
      <h1 className="text-xl">{newsArticle?.title}</h1>
      <p className="dark:text-zinc-400">
        Last Updated At: <span>{newsArticle?.updatedAt.toDateString()}</span>{" "}
      </p>
      <div className="prose text-slate-100">{renderedContent}</div>
    </main>
  );
}

export async function generateStaticParams() {
  const allNews = await db.news.findMany();

  const returnValue = allNews.map((news) => {
    return {
      id: String(news.id),
    };
  });
  console.log(returnValue);
  return returnValue;
}
