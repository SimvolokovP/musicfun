import { Outlet } from "react-router";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import { MobileBar } from "../Mobilebar/Mobilebar";

export const Layout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />

      <div className="flex-1 flex flex-col md:grid md:grid-cols-[310px_1fr] md:h-[calc(100vh-80px)] overflow-hidden">
        <Sidebar />

        <main className="flex-1 pb-20 md:pb-0 container overflow-y-auto">
          <Outlet />
        </main>
      </div>

      <MobileBar />
    </div>
  );
};
