import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className=" text-zinc-200 dark:bg-zinc-900">
      <div className="container mx-auto flex justify-between px-4 py-20">
        <div className="flex flex-col gap-3">
          <Image src={Logo} alt="Logo" className="h-16 w-16" />
          <p>&copy; 2023 Guohui Smart Energy Co.</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col gap-3">
            <Link className="font-semibold" href="/about">
              About
            </Link>
            <Link href="/about">Product Center</Link>
            <Link href="/about">Project Cases</Link>
            <Link href="/about">News center</Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link className="font-semibold" href="/about">
              Contact us
            </Link>
            <Link href="/about">Social Media</Link>
            <Link href="/about">Leave a message online</Link>
            <Link href="/about">Email</Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/" className="font-semibold">
              Legal
            </Link>
            <Link href="/about">Privacy Policy</Link>
            <Link href="/about">Cookie Preferences</Link>
            <Link href="/about">Leave a message online</Link>
            <Link href="/about">Email</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
