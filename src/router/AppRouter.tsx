import { Route, Routes } from "react-router-dom";
import { Layout } from "../layout/Layout/Layout";
import { OAuthCallback } from "../pages/AuthPage/OAuthCallback";
import { MainPage } from "../pages/MainPage/MainPage";
import { TracksPage } from "../pages/TracksPage/TracksPage";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/oauth/callback" element={<OAuthCallback />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />

        <Route path="/tracks" element={<TracksPage />} />
        {/* <Route path="/tracks/:id" element={<TrackPage />} />

        <Route path="/playlists" element={<PlaylistsPage />} />
        <Route path="/playlists/:id" element={<PlaylistPage />} />

        <Route path="/user/:id" element={<UserPage />} /> */}
      </Route>
    </Routes>
  );
}
