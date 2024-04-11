import { db } from "@/db";
import ProductItem from "@/components/products/ProductItem";

export default async function HeatStorageCoolingEquipmentAndMaterialsPage() {
  const products = await db.product.findMany({
    where: {
      category: "HEAT_STORAGE_COOLING_EQUIPMENT_AND_MATERIALS",
    },
  });
  return (
    <>
      {products.map((productItem) => {
        return (
          <ProductItem
            key={productItem.name}
            productName={productItem.name}
            productImg={productItem.image}
            description={productItem.description}
          />
        );
      })}
    </>
  );
}
