import { Outlet } from "react-router";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";

export const Layout = () => {
  //   const { track: currentTrack } = useCurrentTrack()
  //   const isPlayerOpen = false;

  return (
    <div className="h-screen">
      <Header />

      <div className="grid grid-cols-[310px_1fr] h-[calc(100vh-80px)]">
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
      {/* {isPlayerOpen && <Player />} */}
    </div>
  );
};
