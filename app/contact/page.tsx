import heroImage from "@/public/hero1.jpg";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="container mx-auto flex flex-col gap-8 p-8 h-screen">
      <BreadcrumbComponent />
      <div className="grid grid-cols-3 gap-10">
        <Image className="col-span-1" src={heroImage} alt="HeroImage" />
        <article className="prose lg:prose-xl col-span-2">
          <p>This is our contact page</p>
        </article>
      </div>
    </main>
  );
}
