import { Button } from "@/components/ui/button";

interface Props {
  error: Error;
  resetErrorBoundary: () => void;
  title: string;
}

export default function ErrorFallback({
  error,
  resetErrorBoundary,
  title,
}: Props) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center rounded bg-red-100 p-8 text-center text-red-600">
      <p>
        ⚠️ {title}: {error.message}
      </p>
      <Button
        onClick={resetErrorBoundary}
        className="mt-2 rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700"
      >
        Reload
      </Button>
    </div>
  );
}
