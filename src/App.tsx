import AppRoutes from "./app-routes";
import RootLayout from "./components/layout/root-layout";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <RootLayout>
        <AppRoutes />
      </RootLayout>
    </ThemeProvider>
  );
}

export default App;
