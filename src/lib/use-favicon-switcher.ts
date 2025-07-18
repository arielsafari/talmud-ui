import { useTheme } from "@/components/theme-provider";
import { useEffect } from "react";

export default function useFaviconSwitcher() {
  const { systemTheme } = useTheme();

  useEffect(() => {
    const favicon = document.getElementById("favicon") as HTMLLinkElement;
    if (!favicon || !systemTheme) return;

    favicon.href =
      systemTheme === "dark" ? "/favicon-dark.svg" : "/favicon-light.svg";
  }, [systemTheme]);
}
