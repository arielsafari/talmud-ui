import { useDocumentTitle } from "@/hooks/use-document-title";

export default function HomePage() {
  useDocumentTitle("Home");

  return (
    <div className="relative isolate flex flex-1">
      <div className="flex w-full flex-col justify-center gap-14">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 dark:text-gray-300">
            Just a home page
          </h1>
        </div>
      </div>
    </div>
  );
}
