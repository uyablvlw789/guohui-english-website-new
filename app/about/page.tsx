import BreadcrumbComponent from "@/components/layout/BreadcrumbComponent";
import companyPicture from "@/public/about/company-picture.png";
import Image from "next/image";

export default async function AboutPage(props: any) {
  return (
    <main className="container mx-auto flex flex-col gap-8 p-8">
      <BreadcrumbComponent />
      <div className="grid grid-cols-3 gap-10">
        <Image
          className="col-span-1"
          src={companyPicture}
          alt="company picture"
        />
        <article className="prose col-span-2 text-gray-200 lg:prose-xl">
          <p>
            &quot;Guohui (Wuhan) Smart Energy Co., Ltd. was jointly established
            by Dr. Leng Guanghui&apos;s team from the University of Birmingham
            in the UK and Professor Wu Jianfeng&apos;s team from Wuhan
            University of Technology, guided by the national &apos;dual
            carbon&apos; targets. The company is a high-tech enterprise engaged
            in research, production, and sales of comprehensive energy solutions
            integrating source-grid-load-storage, focusing on thermal storage,
            cold storage, electrochemical energy storage, hydrogen and
            ammonia-hydrogen fusion technologies, as well as energy management
            technologies. Its core development direction revolves around the
            intelligent application of clean energy and energy efficiency and
            carbon reduction.
          </p>
          <p>
            The company possesses independent intellectual property rights in
            the field of thermal storage and cold storage materials and
            equipment, with a focus on ceramic new materials. It provides
            customers with ceramic energy storage materials and complete sets of
            clean energy equipment. Currently, it has completed market
            applications in various locations such as Altay in Xinjiang,
            Zhangjiakou in Hebei, Taigu in Shanxi, Tongli in Jiangsu, and Foshan
            in Guangdong.
          </p>
          <p>
            Committed to providing efficient and economical energy storage,
            energy-saving, and clean energy equipment and technical solutions to
            society, the company aims to contribute to China&apos;s &apos;dual
            carbon&apos; targets, energy security, and sustainable environmental
            development.&quot;
          </p>
        </article>
      </div>
    </main>
  );
}
