import { Outlet, Route, Routes } from "react-router";
import HomePage from "./pages/home";
import Layout from "@/components/layout/layout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        element={
          <Layout>
            <Outlet />
          </Layout>
        }
      >
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}
