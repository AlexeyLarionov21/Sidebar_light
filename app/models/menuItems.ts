import type { Menu } from "~/types/item";

export const mainMenu: Menu = {
  title: "General",
  items: [
    {
      id: "1",
      icon: "icon_vue",
      label: "Dashboard",
      to: "/",
    },
    {
      id: "2",
      icon: "icon_vue",
      label: "Apprearance",
      to: "/",
    },
    {
      id: "3",
      icon: "icon_vue",
      label: "Databases",
      to: "/",
    },
    {
      id: "4",
      icon: "icon_vue",
      label: "Connections",
      to: "/",
    },
    {
      id: "5",
      icon: "icon_vue",
      label: "Timezones",
      to: "/",
    },
    {
      id: "5",
      icon: "icon_vue",
      label: "Notifications",
      to: "/",
    },
  ],
};

export const middleMenu: Menu = {
  title: "Ventures",
  items: [
    {
      id: "6",
      icon: "icon_vue",
      label: "User management",
      to: "/",
    },
    {
      id: "7",
      icon: "icon_vue",
      label: "Security & access",
      to: "/",
    },
    {
      id: "8",
      icon: "icon_vue",
      label: "Authentication",
      to: "/",
    },
    {
      id: "9",
      icon: "icon_vue",
      label: "Payments",
      to: "/",
    },
    {
      id: "10",
      icon: "icon_vue",
      label: "Import data",
      to: "/",
    },
    {
      id: "11",
      icon: "icon_vue",
      label: "Export data",
      to: "/",
    },
  ],
};

export const profileMenu: Menu = {
  title: "Profile",
  items: [
    {
      id: "12",
      icon: "icon_vue",
      label: "Settings",
      to: "/",
    },
    {
      id: "13",
      icon: "icon_vue",
      label: "Log out",
      to: "/",
    },
  ],
};
