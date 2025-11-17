export interface Item {
  id: string | number;
  icon: string;
  label: string;
  to: string;
}

export interface Menu {
  title: string;
  items: Item[];
}
