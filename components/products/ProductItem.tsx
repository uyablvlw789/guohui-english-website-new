// @ts-nocheck
import Image from "next/image";
const AWS_URL =
  "https://poro-guohui-english-website.s3.us-west-1.amazonaws.com";

export default function ProductItem({ productImg, productName, description }) {
  return (
    <div className="group mb-8 flex cursor-pointer items-center gap-6 border-l-4 border-blue-400 p-4 transition-all hover:border-zinc-100 hover:bg-blue-200">
      <div className="relative h-64 min-w-80">
        <Image
          src={`${AWS_URL}/${productImg}`}
          alt={productImg}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col gap-3 group-hover:text-zinc-800">
        <h1 className="text-2xl">{productName}</h1>
        <p className="line-clamp-3 text-lg">{description}</p>
      </div>
    </div>
  );
}
