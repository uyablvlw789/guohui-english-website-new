import { db } from "@/db";
import ProductItem from "@/components/products/ProductItem";

export default async function HydrogenAmmoniaHydrogenFusionTechnology() {
  const products = await db.product.findMany({
    where: {
      category: "HYDROGEN_AMMONIA_HYDROGEN_FUSION_TECHNOLOGY",
    },
  });
  return (
    <>
      {products.map((productItem) => {
        return (
          <ProductItem
            productName={productItem.name}
            productImg={productItem.image}
            description={productItem.description}
            key={productItem.name}
          />
        );
      })}
    </>
  );
}
