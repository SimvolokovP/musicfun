import { useTranslation } from "react-i18next";
import { House, Music, Upload } from "lucide-react";
import type { NavItem } from "@/shared/data/nav.data";

export const useNavItems = (): NavItem[] => {
  const { t } = useTranslation();

  return [
    {
      id: 1,
      icon: <House size={28} />,
      label: t("sidebar.home"),
      href: "/",
    },
    // {
    //   id: 2,
    //   icon: <FileMusic size={28} />,
    //   label: t("sidebar.your_library"),
    //   href: "/library",
    // },
    {
      id: 3,
      icon: <Upload size={28} />,
      label: t("sidebar.upload_track"),
      href: "/upload",
    },
    // {
    //   id: 4,
    //   icon: <CirclePlus size={28} />,
    //   label: t("sidebar.create_playlist"),
    //   href: "/create-playlist",
    // },
    {
      id: 5,
      icon: <Music size={28} />,
      label: t("sidebar.all_tracks"),
      href: "/tracks",
    },
    // {
    //   id: 6,
    //   icon: <ListMusic size={28} />,
    //   label: t("sidebar.all_playlists"),
    //   href: "/playlists",
    // },
  ];
};
