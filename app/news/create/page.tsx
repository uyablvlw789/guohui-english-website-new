"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Input, Button } from "@nextui-org/react";

import { createNews } from "@/actions/create-news";

// important that we use dynamic loading here
// editorjs should only be rendered on the client side.
const Editor = dynamic(() => import("@/components/news/Editor"), {
  ssr: false,
});

export default function NewsCreatePage() {
  //state to hold output data. we'll use this for rendering later
  const [data, setData] = useState();
  const [title, setTitle] = useState("");

  console.log("State - title", title);
  // @ts-ignore
  const createNewsAction = createNews.bind(null, title, data);
  return (
    <form className="flex flex-col gap-3" action={createNewsAction}>
      <Input
        classNames={{
          mainWrapper: ["bg-zinc-100"],
        }}
        name="title"
        label="Title"
        labelPlacement="inside"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <div className="rounded-md border">
        <Editor
          // @ts-ignore
          data={data}
          onChange={setData}
          holder="editorjs-container"
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
