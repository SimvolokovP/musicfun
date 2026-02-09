import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./router.config";
import { Layout } from "../ui/Layout/Layout";
import { OAuthCallback } from "../pages/AuthPage/OAuthCallback";
// import { NotFoundPage } from "../pages/NotFoundPage";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/oauth/callback" element={<OAuthCallback />} />
      <Route path="/" element={<Layout />}>
        {ROUTES.map((routeItem) => (
          <Route
            key={routeItem.path}
            path={routeItem.path}
            element={<routeItem.element />}
          />
        ))}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Route>
    </Routes>
  );
}
