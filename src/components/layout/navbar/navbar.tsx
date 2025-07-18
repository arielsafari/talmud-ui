import { BrandName } from "./brand-name";
import { ModeToggle } from "@/components/mode-toggle";

export function Navbar() {
  return (
    <div className="z-50 flex w-full justify-center pb-6">
      <nav className="bg-background supports-backdrop-filter:bg-background w-full border shadow-md backdrop-blur-sm">
        <div className="flex h-12 items-center justify-between px-6">
          <div className="flex-1">
            <BrandName />
          </div>

          <div className="flex flex-1 items-end justify-end gap-3">
            <ModeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
}
