"use client";
import { useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";

// import { EDITOR_TOOLS } from "./EditorTools";

// const holder = "editorjs";

interface EditorProps {
  data: OutputData;
  onChange: (newValue: any) => void;
  holder: string;
}

export default function Editor({ data, onChange, holder }: EditorProps) {
  //add a reference to editor
  const ref = useRef();

  //initialize editorjs
  useEffect(() => {
    //initialize editor if we don't have a reference
    if (!ref.current) {
      const editor = new EditorJS({
        holder: holder,
        // tools: EDITOR_TOOLS,
        data: data,
        async onChange(api, event) {
          const data = await api.saver.save();
          onChange(data);
        },
      });
      // @ts-ignore
      ref.current = editor;
    }

    //add a return function handle cleanup
    return () => {
      // @ts-ignore
      if (ref.current && ref.current.destroy) {
        // @ts-ignore
        ref.current.destroy();
      }
    };
  }, []);

  return <div id={holder} className="prose max-w-full bg-zinc-100"></div>;
}
