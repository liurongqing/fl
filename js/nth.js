import { isNumber } from "./isNumber";
import { isIndexed } from "./isIndexed";
import { fail } from "./fail";
export const nth = (a, index) => {
  if (!isNumber(index)) fail("索引必须是数字");
  if (!isIndexed(a)) fail("必须是可索引值");
  if (index < 0 || index > a.length - 1) fail("超出边界");
  return a[index];
};
