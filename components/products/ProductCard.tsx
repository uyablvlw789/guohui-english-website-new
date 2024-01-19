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
        <div className="col-span-2 min-h-96">
          <h2 className="mb-4 bg-blue-600 px-4 py-2 text-3xl text-white">
            {productCategory}
          </h2>
          <p className="text-lg text-gray-700">{productDescription}</p>
        </div>
        <div className="col-span-1 flex items-center justify-center border-4 border-blue-600 transition-all hover:scale-110">
          <Image
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
        <div className="col-span-1 flex items-center justify-center border-4 border-blue-600 transition-all hover:scale-110">
          <Image
            src={coverImage}
            alt="cover image"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-span-2 min-h-96">
          <h2 className="mb-4 bg-blue-600 px-4 py-2 text-3xl text-white">
            {productCategory}
          </h2>
          <p className="text-lg text-gray-700">{productDescription}</p>
        </div>
      </>
    );
  }
  return <div className="grid grid-cols-3 gap-10">{content}</div>;
}
