export function convertSlugToString(slug: string) {
  // 使用正则表达式将dash替换为空格
  var result = slug.replace(/-/g, " ");
  return result;
}
