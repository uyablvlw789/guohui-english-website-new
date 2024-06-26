// @ts-nocheck
import BreadcrumbComponent from "@/components/layout/BreadcrumbComponent";

export default async function ProductsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" dark:bg-zinc-900 dark:text-zinc-200">
      <div className="container mx-auto flex min-h-screen flex-col gap-8 p-8">
        <BreadcrumbComponent />
        <div className="gap-8 p-8 pl-0">{children}</div>
      </div>
    </main>
  );
}
