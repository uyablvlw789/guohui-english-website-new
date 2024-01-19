"use server";
import { OutputData } from "@editorjs/editorjs";

import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createNews(title: string, data: OutputData) {
  if (!title || !data) {
    throw new Error("Please fill out both title and data");
  }
  const newCreatedNews = await db.news.create({
    data: {
      title: title,
      content: JSON.stringify(data),
      coverImage: "/hero1.jpg",
    },
  });
  console.log(newCreatedNews);

  revalidatePath("/");
  redirect(`/news/${newCreatedNews.id}`);
}
