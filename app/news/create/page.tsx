"use client";
import Link from "next/link";
import { useRef, useState } from "react";

import { Input, Button } from "@nextui-org/react";

import ArticleEditor from "./ArticleEditor";

import { createNews } from "@/actions";
import Image from "next/image";

export default function NewsCreatePage() {
  //state to hold output data. we'll use this for rendering later
  const [data, setData] = useState();
  const [title, setTitle] = useState("");
  const [selectedCoverImage, setSelectedCoverImage] = useState(null);

  const imageInputRef = useRef();

  // @ts-ignore
  const handleImageButtonClicked = (e: any) => {
    // @ts-ignore
    imageInputRef.current.click();
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      // @ts-ignore
      setSelectedCoverImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <>
      <div className="mb-3">
        <Link href="/admin">
          <Button type="button">返回管理员界面</Button>
        </Link>
      </div>
      <h1 className="mb-3 text-xl text-zinc-200">这是新建新闻页面</h1>

      <form className="flex flex-col gap-3" action={createNews}>
        <Input
          classNames={{
            mainWrapper: ["bg-zinc-100"],
          }}
          name="title"
          label="新闻标题（请用英文填写）"
          labelPlacement="inside"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input type="hidden" defaultValue={JSON.stringify(data)} name="data" />
        <div className="rounded-md border">
          <ArticleEditor data={data} setData={setData} />
        </div>
        {/* Cover Image Picker */}
        <div className="flex flex-col gap-3">
          {/* Preview */}
          {selectedCoverImage ? (
            <div className="relative h-40 w-1/2 ">
              <Image
                src={selectedCoverImage}
                alt="user selected cover image"
                fill
                objectFit="cover"
              />
            </div>
          ) : (
            "暂时没有选择任何图片"
          )}
          {/* @ts-ignore */}
          <input
            type="file"
            hidden
            // @ts-ignore
            ref={imageInputRef}
            onChange={handleImageChange}
            name="selectedCoverImage"
          />
          {/* Pick button */}
          <Button type="button" onClick={handleImageButtonClicked}>
            {selectedCoverImage ? "替换已经提交的图片" : "请选择新闻的封面图片"}
          </Button>
        </div>

        <Button type="submit">提交(o^▽^o)</Button>
      </form>
    </>
  );
}
