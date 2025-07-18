import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  resolvedTheme?: "dark" | "light";
  systemTheme?: "dark" | "light";
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme,
  );
  const [systemTheme, setSystemTheme] = useState<"dark" | "light">();
  const [resolvedTheme, setResolvedTheme] = useState<"dark" | "light">();

  useEffect(() => {
    const root = window.document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateSystemTheme = () => {
      const newSystemTheme = darkQuery.matches ? "dark" : "light";
      setSystemTheme(newSystemTheme);

      const finalTheme = theme === "system" ? newSystemTheme : theme;
      setResolvedTheme(finalTheme);

      root.classList.remove("light", "dark");
      root.classList.add(finalTheme);
    };

    updateSystemTheme(); // Run on mount
    darkQuery.addEventListener("change", updateSystemTheme); // Listen for changes

    return () => darkQuery.removeEventListener("change", updateSystemTheme);
  }, [theme]);

  const value = {
    theme,
    resolvedTheme,
    systemTheme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext {...props} value={value}>
      {children}
    </ThemeProviderContext>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
