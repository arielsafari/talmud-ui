"use client";
import { DirectionProvider as RadixDirectionProvider } from "@radix-ui/react-direction";
type Direction = "ltr" | "rtl";

interface Props {
  children: React.ReactNode;
  direction: Direction;
}

export function DirectionProvider({ children, direction }: Props) {
  return (
    <RadixDirectionProvider dir={direction}>{children}</RadixDirectionProvider>
  );
}
