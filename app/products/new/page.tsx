// @ts-nocheck
"use client";
import { createProduct } from "@/actions";
import { Input, Textarea, Button } from "@nextui-org/react";
import CategorySelector from "./category-selector";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCreatePage() {
  const [categorySelection, setCategorySelection] = useState(null);
  const [selectedProductImage, setSelectedProductImage] = useState(null);

  function handleImageButtonClicked() {
    imageInputRef.current.click();
  }
  const imageInputRef = useRef();

  // Image Selection Change
  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      // @ts-ignore
      setSelectedProductImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  // Category Selection Change
  function handleSelectionChange(newSelection: string) {
    // @ts-ignore
    setCategorySelection(newSelection);
  }
  return (
    <>
      <div className="mb-3">
        <Link href="/admin">
          <Button type="button">返回管理员界面</Button>
        </Link>
      </div>
      <h1 className="mb-3 text-xl">这是创建产品页面</h1>
      <form action={createProduct} className="flex flex-col gap-3">
        {/* 产品名称 */}
        <Input
          label="产品名称"
          name="productName"
          placeholder="请输入产品名称"
        />
        {/* 产品描述 */}
        <Textarea
          label="描述"
          placeholder="Enter your description"
          className="w-full"
          name="description"
        />
        {/* 产品图片 */}
        <div className="flex flex-col gap-3">
          {/* Preview */}
          {selectedProductImage ? (
            <div className="relative h-40 w-1/2">
              <Image
                src={selectedProductImage}
                alt="user selected product image"
                fill
                objectFit="cover"
              />
            </div>
          ) : (
            "暂时没有选择任何图片"
          )}
          <input
            type="file"
            hidden
            // @ts-ignore
            ref={imageInputRef}
            onChange={handleImageChange}
            name="productImage"
          />
          {/* Pick button */}
          <Button type="button" onClick={handleImageButtonClicked}>
            {selectedProductImage
              ? "替换已经提交的图片"
              : "请选择产品的封面图片"}
          </Button>
        </div>

        {/* 产品类别 */}
        <CategorySelector
          currentSelection={categorySelection}
          onChange={handleSelectionChange}
        />
        <input
          type="text"
          hidden
          value={categorySelection || ""}
          name="productCategory"
        />
        <Button color="primary" type="submit">
          提交
        </Button>
      </form>
    </>
  );
}
