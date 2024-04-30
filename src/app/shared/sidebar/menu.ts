export interface Menu {
  title: string;
  icon: string;
  subMenu: subMenu[];
}

export interface subMenu {
  label: string;
  path: string;
  icon: string;
}
