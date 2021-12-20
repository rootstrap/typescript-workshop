import { indexOf } from "lodash";

export const getParamFromUrl = (
  nextUrl: string,
  paramName: string
): string | null => {
  if (!nextUrl) return null;

  const params = new URL(nextUrl).searchParams;

  return params.get(paramName);
};

export const getSlugFromUrl = (
  nextUrl: string,
  slugKey: string
): string | null => {
  if (!nextUrl) return null;

  const slugs = new URL(nextUrl).pathname.split("/");

  const keyIndex = indexOf(slugs, slugKey);

  return slugs[keyIndex + 1];
};
