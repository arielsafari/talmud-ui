import { Button } from "@/components/ui/button";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { Link, useNavigate } from "react-router";

export default function NotFound() {
  useDocumentTitle("404 Not Found");

  const navigate = useNavigate();

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-10">
      <div className="flex flex-row items-center justify-center gap-4">
        <h1 className="text-primary border-e-2 border-slate-500 pe-4 text-3xl">
          404
        </h1>
        <h2 className="text-foreground text-2xl">Page Not Found</h2>
      </div>

      <div className="space-x-4">
        <Button
          variant="outline"
          onClick={() => navigate(-1)}
          className="min-w-[120px]"
        >
          Previous Page
        </Button>

        <Button className="min-w-[120px]">
          <Link to="/">Home Page</Link>
        </Button>
      </div>
    </div>
  );
}
