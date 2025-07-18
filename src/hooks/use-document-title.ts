import { useIsomorphicEffect } from "./use-isomorphic-effect";

export function useDocumentTitle(title: string) {
  const titlePrefix = "";
  const titleSuffix = " | Posh Manager";
  useIsomorphicEffect(() => {
    if (typeof title === "string" && title.trim().length > 0) {
      document.title = titlePrefix + title.trim() + titleSuffix;
    }
  }, [title]);
}
