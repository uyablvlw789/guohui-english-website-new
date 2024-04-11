import thermalEnergyStorageDevicesAndMaterialsCoverImageUrl from "@/public/thermal-energy-storage-devices-and-materials/thermal-storage-supply-thermal-oil-boiler.jpg";
import Image from "next/image";

export default function ProductCard({
  productCategory = "product category placeholder",
  productDescription = "product description placeholder",
  descendingOrder = false,
  coverImage = thermalEnergyStorageDevicesAndMaterialsCoverImageUrl,
}) {
  let content;
  if (!descendingOrder) {
    content = (
      <>
        <div className="col-span-3 ">
          <h2 className="mb-4 bg-blue-600 px-4 py-2 text-3xl text-white">
            {productCategory}
          </h2>
        </div>
        <div className="col-span-3 flex items-center justify-center gap-10">
          <p className="text-xl text-gray-200">{productDescription}</p>
          <Image
            className="transition-all hover:scale-110"
            src={coverImage}
            alt="cover image"
            style={{ objectFit: "cover" }}
          />
        </div>
      </>
    );
  } else {
    content = (
      <>
        <div className="col-span-3 ">
          <h2 className="mb-4 bg-blue-600 px-4 py-2 text-3xl text-white">
            {productCategory}
          </h2>
        </div>
        <div className="col-span-3 flex items-center justify-center gap-10 ">
          <Image
            className="transition-all hover:scale-110"
            src={coverImage}
            alt="cover image"
            style={{ objectFit: "cover" }}
          />
          <p className="text-xl text-gray-200">{productDescription}</p>
        </div>
      </>
    );
  }
  return <div className="grid grid-cols-3 gap-10">{content}</div>;
}
