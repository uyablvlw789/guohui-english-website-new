// @ts-nocheck
"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { S3, PutObjectCommand } from "@aws-sdk/client-s3";
import slugify from "slugify";
import xss from "xss";

const s3 = new S3({
  region: "us-west-1",
});

function getImageFullName(slugifiedTitle, image, prefix) {
  const imageExt = image.name.split(".").pop();
  return `${prefix}-${slugifiedTitle}.${imageExt}`;
}

export async function createNews(formData: any) {
  const title = formData.get("title");

  const data = formData.get("data");

  const selectedCoverImage = formData.get("selectedCoverImage");
  if (!title || !data) {
    throw new Error("Please fill out both title and data");
  }

  const coverImageName = slugify(title, { lower: true });

  const coverImageFullName = getImageFullName(
    coverImageName,
    selectedCoverImage,
    "news",
  );

  const BufferedImage = await selectedCoverImage.arrayBuffer();

  const input = {
    Body: Buffer.from(BufferedImage),
    Bucket: "poro-guohui-english-website",
    Key: coverImageFullName,
    ContentType: selectedCoverImage.type,
  };

  const command = new PutObjectCommand(input);

  try {
    const response = await s3.send(command);
  } catch (error) {
    console.log(error);
  }

  const newCreatedNews = await db.news.create({
    data: {
      title: xss(title),
      content: data,
      coverImage: coverImageFullName,
    },
  });

  revalidatePath("/");
  redirect(`/news/${newCreatedNews.id}`);
}

export async function createProduct(formData: any) {
  console.log(formData.get("productName"));
  console.log(formData.get("description"));
  console.log(formData.get("productImage"));
  console.log(formData.get("productCategory"));

  const productName = formData.get("productName");
  const description = formData.get("description");
  const productImage = formData.get("productImage");
  const productCategory = formData.get("productCategory");

  if (!productName || !description || !productImage || !productCategory) {
    throw new Error("Please fill out all entries");
  }

  const productImageName = slugify(productName, { lower: true });

  const productImageFullName = getImageFullName(
    productImageName,
    productImage,
    "product",
  );

  const BufferedImage = await productImage.arrayBuffer();

  const input = {
    Body: Buffer.from(BufferedImage),
    Bucket: "poro-guohui-english-website",
    Key: productImageFullName,
    ContentType: productImage.type,
  };

  const command = new PutObjectCommand(input);

  try {
    const response = await s3.send(command);
  } catch (error) {
    console.log(error);
  }

  const newCreatedProduct = await db.product.create({
    data: {
      name: productName,
      image: productImageFullName,
      description: description,
      category: productCategory,
    },
  });
  revalidatePath("/");
  redirect(`/admin`);
}
