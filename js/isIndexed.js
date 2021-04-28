import { isString } from "./isString";
export const isIndexed = (data) => {
  return Array.isArray(data) || isString(data);
};
