import ProductItem from "@/components/products/ProductItem";
import cleanEnergyHydrogenProductionImg from "@/public/products/hydrogen-ammonia-hydrogen-fusion-technology/clean-energy-hydrogen-production.jpeg";

export default function HydrogenAmmoniaFusionTechnologyPage() {
  return (
    <>
      <ProductItem
        productImg={cleanEnergyHydrogenProductionImg}
        productName="Clean Energy Hydrogen Production"
        description="The technology can be applied to the construction of on-site hydrogen production and hydrogenation integrated systems for hydrogen stations. This technology combines solar energy, off-peak electricity, and thermal storage techniques to maximize the use of clean energy, reduce carbon emissions, and lower costs."
      />
    </>
  );
}
