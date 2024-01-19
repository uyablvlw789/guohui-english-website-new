import Image from "next/image";
import { StaticImageData } from "next/image";

interface productItemProps {
  productImg: StaticImageData;
  productName: string;
  description?: string;
}
export default function ProductItem({
  productImg,
  productName,
  description,
}: productItemProps) {
  return (
    <div className="flex items-center gap-6 border-l-4 border-blue-400 p-4">
      <div>
        <Image src={productImg} alt={description || ""} />
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl">{productName}</h1>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
}
