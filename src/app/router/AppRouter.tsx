import { Route, Routes } from "react-router-dom";
import { OAuthCallback } from "../../pages/AuthPage/OAuthCallback";
import { MainPage } from "../../pages/MainPage/MainPage";
import { TracksPage } from "../../pages/TracksPage/TracksPage";
import { Layout } from "../../layout/Layout/Layout";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/oauth/callback" element={<OAuthCallback />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />

        <Route path="/tracks" element={<TracksPage />} />
      </Route>
    </Routes>
  );
}
