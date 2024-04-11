// @ts-nocheck
import { db } from "@/db";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";

const NewsCard = function ({ title, createdAt, coverImage, linkTo }) {
  const AWS_URL =
    "https://poro-guohui-english-website.s3.us-west-1.amazonaws.com";
  return (
    <Link className="z-0 cursor-pointer" href={`/news/${linkTo}`}>
      <Card className="py-4">
        <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
          <small className="text-default-500">{createdAt.toDateString()}</small>
          <h4 className="text-large font-bold">{title}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="rounded-xl object-cover transition-all hover:scale-105"
            src={`${AWS_URL}/${coverImage}`}
            width={270}
          />
        </CardBody>
      </Card>
    </Link>
  );
};

export default async function PluralNewsPage() {
  const Allnews = await db.news.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      <h1 className="mb-8 border-b-2 border-blue-400 pb-7 text-2xl dark:text-zinc-200">
        We are pleased to share our company's recent updates.
      </h1>

      <div className="grid grid-cols-3 gap-6">
        {Allnews.map((news) => {
          return (
            <NewsCard
              key={news.title}
              title={news.title}
              createdAt={news.createdAt}
              coverImage={news.coverImage}
              linkTo={news.id}
            />
          );
        })}
      </div>
    </>
  );
}
