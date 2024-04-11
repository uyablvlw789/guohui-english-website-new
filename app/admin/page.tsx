import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function AdminPage() {
  return (
    <>
      <h1 className="mb-6 text-xl">欢迎来到管理员界面</h1>
      <div className="flex gap-3">
        <Link href="/news/create">
          <Button>创建一则新的新闻 </Button>
        </Link>

        <Link href="/products/new">
          <Button>创建一个新的产品</Button>
        </Link>

        <Link href="" target="_blank">
          <Button>使用chatGPT进行翻译或学习</Button>
        </Link>
      </div>
    </>
  );
}
