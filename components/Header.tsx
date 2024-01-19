import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import HoverMenu from "./HoverMenu";

function Header() {
  return (
    <header className=" dark:bg-zinc-950 dark:text-zinc-200">
      {/* header content wrapper */}
      <div className="container mx-auto flex items-center justify-between p-6">
        {/* logo image and Company name wrapper  */}
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src={Logo} alt="logo" className="h-16 w-16" />
            {/* brand name */}
            <p className="text-3xl font-bold">Guohui Intelligent Energy</p>
          </div>
        </Link>
        {/* nav links wrapper */}
        <nav>
          <ul className="flex gap-8">
            <li className="rounded-md px-4 py-2 text-lg transition-all hover:bg-blue-100 dark:hover:text-zinc-500">
              <Link href="/about"> About </Link>
            </li>
            <li className="relative rounded-md px-4 py-2 text-lg transition-all hover:bg-blue-100">
              <HoverMenu title="products" />
            </li>
            <li className="rounded-md px-4 py-2 text-lg transition-all hover:bg-blue-100">
              <Link href="/project-cases">Project Cases</Link>
            </li>
            <li className="rounded-md px-4 py-2 text-lg transition-all hover:bg-blue-100 dark:bg-blue-100 dark:text-zinc-700">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
