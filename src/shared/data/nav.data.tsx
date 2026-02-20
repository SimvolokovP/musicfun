import { House, Music, Upload } from "lucide-react";
import type { ReactNode } from "react";

export interface NavItem {
  id: number;
  icon: ReactNode;
  label: string;
  href?: string;
}

export const navItems: NavItem[] = [
  {
    id: 1,
    icon: <House size={28} />,
    label: "Home",
    href: "/",
  },
  // {
  //   id: 2,
  //   icon: <FileMusic size={28} />,
  //   label: "Your Library",
  //   href: "/library",
  // },
  {
    id: 3,
    icon: <Upload size={28} />,
    label: "Upload Track",
    href: "/upload",
  },
  // {
  //   id: 4,
  //   icon: <CirclePlus size={28} />,
  //   label: "Create Playlist",
  //   href: "/create-playlist",
  // },
  {
    id: 5,
    icon: <Music size={28} />,
    label: "All Tracks",
    href: "/tracks",
  },
  // {
  //   id: 6,
  //   icon: <ListMusic size={28} />,
  //   label: "All Playlists",
  //   href: "/playlists",
  // },
];
