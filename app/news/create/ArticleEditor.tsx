import dynamic from "next/dynamic";
// important that we use dynamic loading here
// editorjs should only be rendered on the client side.
const Editor = dynamic(() => import("@/components/news/Editor"), {
  ssr: false,
});
export default function ArticleEditor({ data, setData }: any) {
  return (
    <Editor
      // @ts-ignore
      data={data}
      onChange={setData}
      holder="editorjs-container"
    />
  );
}
