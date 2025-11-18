import type { Menu } from "~/types/item";

export const mainMenu: Menu = {
  title: "General",
  items: [
    {
      id: "1",
      icon: "solar:graph-up-linear",
      label: "Dashboard",
      to: "/",
    },
    {
      id: "2",
      icon: "fluent:color-24-regular",
      label: "Appearance",
      to: "/",
    },
    {
      id: "3",
      icon: "bi:database",
      label: "Databases",
      to: "/",
    },
    {
      id: "4",
      icon: "solar:widget-add-broken",
      label: "Connections",
      to: "/",
    },
    {
      id: "5",
      icon: "mynaui:notification",
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
      icon: "lucide:users",
      label: "User management",
      to: "/",
    },
    {
      id: "7",
      icon: "solar:key-broken",
      label: "Security & access",
      to: "/",
    },
    {
      id: "8",
      icon: "ion:card-outline",
      label: "Payments",
      to: "/",
    },
    {
      id: "9",
      icon: "bytesize:download",
      label: "Import data",
      to: "/",
    },
    {
      id: "10",
      icon: "bytesize:upload",
      label: "Export data",
      to: "/",
    },
  ],
};

export const profileMenu: Menu = {
  title: "Profile",
  items: [
    {
      id: "11",
      icon: "solar:settings-broken",
      label: "Settings",
      to: "/",
    },
    {
      id: "12",
      icon: "mynaui:logout",
      label: "Log out",
      to: "/",
    },
  ],
};
