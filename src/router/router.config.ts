// import { CreateRoomPage } from "../pages/CreateRoomPage";
// import { HomePage } from "../pages/HomePage";
// import { ProfilePage } from "../pages/ProfilePage";
// import { RoomsPage } from "../pages/RoomsPage";
// import { SearchRoomPage } from "../pages/SearchRoomPage";
// import { SingleRoomPage } from "../pages/SingleRoomPage";
import { MainPage } from "../pages/MainPage/MainPage";
import { TracksPage } from "../pages/TracksPage/TracksPage";
import type { IRoute } from "./router.types";

export const PUBLIC_URL = {
  main: "/",
  tracks: "/tracks",
  trackById: (id: string = ":id") => `/tracks/${id}`,
  playlists: "/playlists",
  playlistById: (id: string = ":id") => `/playlists/${id}`,
  userById: (id: string = ":id") => `/user/${id}`,
} as const;

export const getPublicUrl = {
  main: () => PUBLIC_URL.main,
  tracks: () => PUBLIC_URL.tracks,
  trackById: (id: string) => PUBLIC_URL.trackById(id),
  playlists: () => PUBLIC_URL.playlists,
  playlistById: (id: string) => PUBLIC_URL.playlistById(id),
  userById: (id: string) => PUBLIC_URL.userById(id),
};

export const ROUTES: IRoute[] = [
  {
    path: PUBLIC_URL.main,
    element: MainPage,
  },
  {
    path: PUBLIC_URL.tracks,
    element: TracksPage,
  },
  //   {
  //     path: PUBLIC_URL.rooms,
  //     element: RoomsPage,
  //   },
  //   {
  //     path: PUBLIC_URL.create,
  //     element: CreateRoomPage,
  //   },
  //   {
  //     path: PUBLIC_URL.search,
  //     element: SearchRoomPage,
  //   },
  //   {
  //     path: PUBLIC_URL.roomById(":id"),
  //     element: SingleRoomPage,
  //   },
];

// <Route index element={<MainPage />} />

//       <Route path="/tracks" element={<TracksPage />} />
//       <Route path="/tracks/:id" element={<TrackPage />} />

//       <Route path="/playlists" element={<PlaylistsPage />} />
//       <Route path="/playlists/:id" element={<PlaylistPage />} />

//       <Route path="/user/:id" element={<UserPage />} />
