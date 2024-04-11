// @ts-nocheck
import BreadcrumbComponent from "@/components/layout/BreadcrumbComponent";
export default function AdminLayout({ children }) {
  return (
    <main className=" dark:bg-zinc-900 dark:text-zinc-200">
      <div className="container mx-auto flex min-h-screen flex-col gap-8 p-8">
        <BreadcrumbComponent />
        <div className="gap-8 p-8 pl-0">{children}</div>
      </div>
    </main>
  );
}
