import * as React from "react";
import { Switch as SwitchPrimitive } from "radix-ui";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

// Root variants: control the main container size
const switchRootVariants = cva(
  "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-4 w-7",
        md: "h-[1.15rem] w-8",
        lg: "h-6 w-11",
        xl: "h-7 w-14",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

// Thumb variants: control the thumb size & positioning
const switchThumbVariants = cva(
  "bg-background dark:data-[state=unchecked]:bg-foreground/80 dark:data-[state=checked]:bg-primary-foreground/80 pointer-events-none block rounded-full ring-0 transition-transform",
  {
    variants: {
      size: {
        sm: "size-2.5 [--switch-thumb-translate-x:calc(100%+4px)]",
        md: "size-3 [--switch-thumb-translate-x:calc(100%+5px)]",
        lg: "size-5 [--switch-thumb-translate-x:calc(100%+1px)]",
        xl: "size-6 [--switch-thumb-translate-x:calc(100%+4px)]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

// Full props interface with type-safe variants
export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
    VariantProps<typeof switchRootVariants> {}

export const Switch = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, size, ...props }, ref) => {
  return (
    <SwitchPrimitive.Root
      ref={ref}
      data-slot="switch"
      className={cn(switchRootVariants({ size }), className)}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          switchThumbVariants({ size }),
          "data-[state=checked]:translate-x-[var(--switch-thumb-translate-x)] data-[state=unchecked]:translate-x-0.5",
        )}
      />
    </SwitchPrimitive.Root>
  );
});

Switch.displayName = "Switch";
