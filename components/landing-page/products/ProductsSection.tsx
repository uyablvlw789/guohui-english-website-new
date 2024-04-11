import thermalStorageHeatingFurnaceImg from "@/public/thermal-energy-storage-devices-and-materials/thermal-storage-heating-furnace.jpg";
import modularEnergyIslandImg from "@/public/integrated-energy-system-for-generation-grid-load-and-storage/modular-energy-island.jpg";
import cleanEnergyHydrogenProductionImg from "@/public/products/hydrogen-ammonia-hydrogen-fusion-technology/clean-energy-hydrogen-production.jpeg";
import refrigerationHeatPumpCycleDemonstrationSystem from "@/public/teaching-scientific-laboratory-equipment/refrigeration-heat-pump-cycle-demonstration-system-(heat-pump-laboratory-bench).png";
import ProductCard from "./ProductCard";
export default function ProductsSection() {
  return (
    <section className="container mx-auto">
      <div className="flex items-center gap-8">
        <h3 className="mb-12 text-3xl font-bold">Our Products </h3>
        <p className="mb-12 cursor-pointer bg-blue-300 px-4 py-2 text-xl uppercase text-white transition-all hover:bg-white hover:text-blue-300">
          Market-oriented, product-centric
        </p>
      </div>
      <div className="flex flex-col gap-16">
        <ProductCard
          productCategory="Heat storage/cooling equipment and materials"
          productDescription="Heat and cold storage devices and materials are essential for a variety of applications, including:Energy storage: Heat and cold can be stored for later use, providing a reliable source of energy when needed. This can be used to reduce peak energy demand, improve grid stability, and support renewable energy sources.
        Building and industrial applications: Heat and cold can be stored to improve the efficiency of buildings and industrial processes. For example, heat can be stored from solar panels to provide heating in the winter, and cold can be stored from air conditioners to provide cooling in the summer.
        Transportation: Heat and cold can be stored to improve the efficiency of transportation. For example, heat can be stored from a vehicle's engine to provide heating in the winter, and cold can be stored from a vehicle's air conditioner to provide cooling in the summer."
          descendingOrder={false}
          coverImage={thermalStorageHeatingFurnaceImg}
        />
        <ProductCard
          descendingOrder={true}
          productCategory="Integrated Energy System for Generation, Grid, Load, and Storage"
          productDescription="Integrated energy systems (IESs) are a type of energy system that combines multiple energy sources, energy storage technologies, and grid infrastructure to provide a more efficient, reliable, and sustainable energy supply. IESs can be used to integrate a variety of renewable energy sources, such as solar and wind power, with traditional energy sources, such as fossil fuels. They can also be used to integrate energy storage technologies, such as batteries and thermal storage, to help balance energy supply and demand.
          IESs have the potential to address a number of challenges facing the global energy system, including:
          Climate change: IESs can help to reduce greenhouse gas emissions by integrating renewable energy sources and energy storage technologies.
          Energy security: IESs can help to improve energy security by reducing reliance on imported fossil fuels.
          Economic efficiency: IESs can help to reduce energy costs by improving efficiency and reliability."
          coverImage={modularEnergyIslandImg}
        />
        <ProductCard
          descendingOrder={false}
          productCategory="Hydrogen/ammonia-hydrogen fusion technology"
          productDescription="Hydrogen/ammonia-hydrogen fusion technology is a technology that uses the fusion of hydrogen and ammonia nuclei to generate energy. Hydrogen nuclear fusion is the primary way that energy is produced in the universe, and it has the advantages of being safe, clean, and sustainable.
        The core of hydrogen/ammonia-hydrogen fusion technology is to bring hydrogen and ammonia nuclei together to produce helium nuclei and a large amount of energy. Hydrogen nuclei are lighter than helium nuclei"
          coverImage={cleanEnergyHydrogenProductionImg}
        />
        <ProductCard
          descendingOrder={true}
          productCategory="Teaching/scientific laboratory equipment"
          productDescription="Teaching and scientific laboratory equipment is essential for students to learn and practice science. It allows them to conduct experiments, observe phenomena, and make measurements. This equipment can be used to teach a variety of science topics, including chemistry, physics, biology, and engineering."
          coverImage={refrigerationHeatPumpCycleDemonstrationSystem}
        />
      </div>
    </section>
  );
}
