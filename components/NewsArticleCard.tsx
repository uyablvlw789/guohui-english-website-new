import { StaticImageData } from "next/image";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import templateImg from "@/public/hero1.jpg";
import React from "react";
// import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
interface NewsArticleCardProps {
  title: string;
  description: string;
  coverImage: string;
  date: Date;
}

export default function NewsArticleCard({
  title,
  description,
  coverImage,
  date,
}: NewsArticleCardProps) {
  return (
    <Card
      shadow="sm"
      isPressable
      onPress={() => console.log("item pressed")}
      className="w-96"
    >
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          width="100%"
          alt={title}
          className="h-[240px] w-full object-cover"
          src="/hero1.jpg"
          isZoomed
        />
      </CardBody>
      <CardFooter className="justify-between text-small">
        <b>{title}</b>
        <p className="text-default-500">{date.toDateString()}</p>
      </CardFooter>
    </Card>
  );
}
