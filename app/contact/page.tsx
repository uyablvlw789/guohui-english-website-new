import heroImage from "@/public/hero1.jpg";
import BreadcrumbComponent from "@/components/layout/BreadcrumbComponent";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="container mx-auto mb-20 flex h-screen flex-col gap-8 p-8">
      <BreadcrumbComponent />
      <div className="grid grid-cols-3 gap-10">
        <Image className="col-span-1" src={heroImage} alt="HeroImage" />
        <article className="prose col-span-2 lg:prose-xl dark:text-zinc-200 ">
          <h3 className="dark:text-zinc-200">Headquarter:</h3>
          <p>
            Guohui (Wuhan) Intelligent Energy Co., Ltd. Address: Room 903,
            Building 3, New Energy R&D Base, Wuhan University of Technology
            Science Park, East Lake New Technology Development Zone, Wuhan City,
            Hubei Province, China.
          </p>
          <p>Pre-sales phone: Manager Wang, (+86) 15927357927</p>
          <p>After-sales phone: (+86) 027-59301778</p>
          <h3 className="dark:text-zinc-200">Branch Office:</h3>
          <p>Guohui Danqing (Foshan) New Energy Technology Co., Ltd. </p>
          <p>
            Address: 3rd Floor, Building D12, Danzao Logistics Center, Xiangda
            Road No.1, Danzao Town, Nanhai District, Foshan City Contact Phone:
            Manager Zhou, 18162321257 Branch Office: Guohui Danqing (Foshan) New
            Energy Technology Co., Ltd.
          </p>
          <p>
            Address: 3rd Floor, Building D12, Danzao Logistics Center, Xiangda
            Road No.1, Danzao Town, Nanhai District, Foshan City, China.
          </p>
          <p>Contact Phone: Manager Zhou, (+86) 18162321257</p>
        </article>
      </div>
    </main>
  );
}
