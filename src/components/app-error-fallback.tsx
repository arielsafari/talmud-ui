import { Button } from "@/components/ui/button";

interface Props {
  error: Error;
  resetErrorBoundary: () => void;
}

export default function AppErrorFallback({ error, resetErrorBoundary }: Props) {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6 bg-red-50 p-6 text-red-700">
      <h2 className="text-2xl font-semibold">Oy Vey... It seems like a bug.</h2>
      <div
        dir="ltr"
        className="flex max-w-[80%] flex-col items-center justify-center gap-10"
      >
        <p>{error.message}</p>
        <pre className="text-xs whitespace-pre-wrap">{error.stack}</pre>
      </div>
      <Button
        onClick={resetErrorBoundary}
        className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
      >
        נסה שוב
      </Button>
    </div>
  );
}
