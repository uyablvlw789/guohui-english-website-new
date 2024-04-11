import { db } from "@/db";
import ProductItem from "@/components/products/ProductItem";

export default async function IntegratedEnergySystemfForGenerationGridLoadAndStoragePage() {
  const products = await db.product.findMany({
    where: {
      category: "INTEGRATED_ENERGY_SYSTEM_FOR_GENERATION",
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
