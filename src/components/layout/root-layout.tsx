import { DirectionProvider } from "./direction-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router";
import { TailwindIndicator } from "./tailwind-indicator";
import useFaviconSwitcher from "@/lib/use-favicon-switcher";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "@/components/ui/sonner";

import "./index.css";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useFaviconSwitcher();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <DirectionProvider direction="rtl">
          {children}
          <Toaster />
          <TailwindIndicator />
          <ReactQueryDevtools />
        </DirectionProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
