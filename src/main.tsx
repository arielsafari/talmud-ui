import ReactDOM from "react-dom/client";
import App from "./App";
import { ErrorBoundary } from "react-error-boundary";
import AppErrorFallback from "./components/app-error-fallback";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={({ error, resetErrorBoundary }) => (
        <AppErrorFallback
          error={error}
          resetErrorBoundary={resetErrorBoundary}
        />
      )}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
